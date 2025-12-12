---
title: "Symfony: MicroKernelTrait dans un Kernel custom"
description: "Une explication sur l'utilisation d'un Kernel customisé et du MicroKernelTrait pour un projet Symfony."
pubDate: 2025-03-04
lang: fr
tags: [blog, symfony]
published: true
draft: false
---

Une explication sur l'utilisation d'un Kernel customisé et du MicroKernelTrait pour un projet Symfony.

<!-- excerpt -->

Dernier jour de l'année professionnelle chez [Akawaka](https://www.akawaka.fr/) avant des vacances d'été bien méritées (non, contrairement à ce que certains et certaines pensent, nous ne sommes pas en vacances sans arrêt…). J'ai donc profité de la relative accalmie pour m'atteler à la mise à jour d'un vieux projet Symfony 4.4 vers Symfony 7.

Avec son début d'année chaotique, un 2e trimestre professionnel bien rempli et cette décision de changer d'hébergeur, nous n'avions pas encore eu l'occasion de nous pencher dessus. Jusqu'à ce 15 juillet. J'ai découvert quelques spécificités sur la façon dont le framework évolue et je me suis dit que cela pourrait vous intéresser.

## Utilisation du MicroKernelTrait

Le projet en question utilise un Kernel customisé pour gérer les routes. Celui-ci se base sur le [MicroKernelTrait de Symfony](https://symfony.com/doc/current/configuration/micro_kernel_trait.html). La route principale (et unique) était définie dans le Kernel via la méthode "configureRoutes" :

```php
protected function configureRoutes(RoutingConfigurator $routes): void
{
    $routes
        ->add('home', '/')
        ->controller(MyController::class);
}
```

## Le problème

Lors de la mise à jour de Symfony 4.4 à Symfony 7, il faut prendre en compte plusieurs changements majeurs :

- l'autowiring est amélioré et doit être utilisé dans la mesure du possible ;
- certaines classes sont dépréciées ou supprimées ;
- le MicroKernelTrait impose de nouvelles règles sur la configuration des routes.

## Une solution simple

Les modifications majeures résident dans la façon dont on instancie les contrôleurs. Dans mon cas, j'ai opté pour l'instanciation automatique via l'autowiring de Symfony. Concrètement, cela se traduit par l'utilisation d'un constructeur dans le contrôleur.

```php
class MyController extends AbstractController
{
    public function __construct(private MyService $service) {}

    public function __invoke(): Response
    {
        $data = $this->service->getData();

        return $this->json($data);
    }
}
```

Un autre aspect à prendre en compte est la configuration des services. Dans Symfony 4.4, nous avions tendance à configurer certains services manuellement. Désormais, grâce à l'autowiring, nous pouvons laisser le framework faire une grande partie du travail à notre place.

## Mise à jour de la configuration

Voici un exemple de configuration à adapter :

```yaml
services:
    _defaults:
        autowire: true
        autoconfigure: true
        bind:
            $someParameter: '%env(SOME_PARAMETER)%'

    App\Controller\:
        resource: '../src/Controller/'
        tags: ['controller.service_arguments']
```

## Conclusion

En résumé, la mise à jour d'un projet Symfony 4.4 vers Symfony 7 nécessite une attention particulière aux nouvelles fonctionnalités et aux changements dans la gestion des routes avec le MicroKernelTrait. Grâce à l'autowiring et à une configuration appropriée, vous pouvez simplifier la gestion des services et améliorer la maintenabilité de votre application.
