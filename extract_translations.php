<?php

require __DIR__ . '/vendor/autoload.php';

//use Symfony\Component\Finder\Finder;
//use Symfony\Component\Translation\MessageCatalogue;
//use Symfony\Component\Translation\Writer\TranslationWriter;
//use Symfony\Component\Translation\Dumper\PoFileDumper;
//use Symfony\Component\Translation\Dumper\YamlFileDumper;
//use Symfony\Component\Yaml\Yaml; // Assurez-vous d'avoir cette dépendance
//
//class TwigTranslationExtractor
//{
//    private $pattern = '/\{% trans %\}(.*?)\{% endtrans %\}/s';
//
//    public function extract($directory, MessageCatalogue $catalogue)
//    {
//        $finder = new Finder();
//        $finder->files()->in($directory)->name('*.twig');
//
//        foreach ($finder as $file) {
//            $content = $file->getContents();
//
//            if (preg_match_all($this->pattern, $content, $matches)) {
//                foreach ($matches[1] as $message) {
//                    $catalogue->set(trim($message), trim($message));
//                }
//            }
//        }
//    }
//
//    public function parseFile($filePath)
//    {
//        $translations = [];
//
//        if (file_exists($filePath)) {
//            $extension = pathinfo($filePath, PATHINFO_EXTENSION);
//            if ($extension === 'po') {
//                $poData = file_get_contents($filePath);
//                $lines = explode("\n", $poData);
//
//                $msgId = null;
//
//                foreach ($lines as $line) {
//                    $line = trim($line);
//                    if (preg_match('/^msgid "(.*)"$/', $line, $matches)) {
//                        $msgId = $matches[1];
//                    } elseif (preg_match('/^msgstr "(.*)"$/', $line, $matches)) {
//                        $msgStr = $matches[1];
//                        if ($msgId !== null) {
//                            $translations[$msgId] = $msgStr;
//                            $msgId = null; // Reset for the next entry
//                        }
//                    }
//                }
//            } elseif ($extension === 'yaml' || $extension === 'yml') {
//                $translations = Yaml::parseFile($filePath);
//            }
//        }
//
//        return $translations;
//    }
//}
//
//// Récupération des paramètres depuis la ligne de commande
//$langCode = $argv[1] ?? 'fr';
//$sourceDir = $argv[2] ?? './templates';
//$destDir = $argv[3] ?? './translations';
//$dumperType = $argv[4] ?? 'po';
//$baseName = $argv[5] ?? 'messages';
//
//// Vérification de l'existence des dossiers
//if (!is_dir($sourceDir)) {
//    echo "Error: Source directory does not exist.\n";
//    exit(1);
//}
//
//if (!is_dir($destDir)) {
//    echo "Error: Destination directory does not exist.\n";
//    exit(1);
//}
//
//// Initialisation du catalogue des messages pour la langue cible
//$catalogue = new MessageCatalogue($langCode);
//
//// Chargement du catalogue existant si le fichier existe
//$outputFile = rtrim($destDir, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . "$baseName.$langCode." . ($dumperType === 'po' ? 'po' : 'yaml');
//$extractor = new TwigTranslationExtractor();
//
//if (file_exists($outputFile)) {
//    $existingTranslations = $extractor->parseFile($outputFile);
//    foreach ($existingTranslations as $key => $value) {
//        $catalogue->set($key, $value);
//    }
//}
//
//// Création d'un extracteur de traductions
//$extractor->extract($sourceDir, $catalogue);
//
//// Sélection du dumper en fonction du type fourni
//$writer = new TranslationWriter();
//
//switch (strtolower($dumperType)) {
//    case 'po':
//        $writer->addDumper('po', new PoFileDumper());
//        $extension = 'po';
//        break;
//    case 'yaml':
//    case 'yml':
//        $writer->addDumper('yaml', new YamlFileDumper());
//        $extension = 'yaml';
//        break;
//    default:
//        echo "Error: Unsupported dumper type '$dumperType'. Supported types are 'po', 'yaml'.\n";
//        exit(1);
//}
//
//// Ecriture des traductions dans le fichier de sortie
//$writer->write($catalogue, $extension, ['path' => $destDir]);
//
//echo "Translations extracted and saved to $outputFile\n";

use Translation\Extractor\Extractor;
use Translation\Extractor\FileExtractor\TwigFileExtractor;
use Translation\Extractor\Visitor;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader('themes/default/layouts');
$environement = new Environment($loader);

// Create extractor for PHP files
$twigFileExtractor = new TwigFileExtractor($environement);

// Add visitors
$twigFileExtractor->addVisitor(new Visitor\Twig\TwigVisitor);

// Add the file extractor to Extractor
$extractor = new Extractor();
$extractor->addFileExtractor($twigFileExtractor);

//Start extracting files
$sourceCollection = $extractor->extractFromDirectory('themes/default/layouts');

// Print the result
foreach ($sourceCollection as $source) {
    echo sprintf('Key "%s" found in %s at line %d', $source->getMessage(), $source->getPath(), $source->getLine());
}
