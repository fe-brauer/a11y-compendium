<?php

use B13\Container\Backend\Preview\ContainerPreviewRenderer;
use B13\Container\Tca\ContainerConfiguration;

defined('TYPO3') or die();

(static function () {

    $containerConfiguration = (new ContainerConfiguration(
        'brauer_onecolumncontainer',
        'LLL:EXT:sitepackage/Resources/Private/Language/container.xlf:brauer_onecolumncontainer.title',
        'LLL:EXT:sitepackage/Resources/Private/Language/container.xlf:brauer_onecolumncontainer.description',
        [
            [
                [
                    'name' => 'LLL:EXT:sitepackage/Resources/Private/Language/container.xlf:brauer_onecolumncontainer.content.1.label',
                    'colPos' => 100
                ]
            ]
        ]
    ))->setBackendTemplate('EXT:sitepackage/Resources/Private/PageView/Backend/Container/OneColumn.html');


    $GLOBALS['TCA']['tt_content']['containerConfiguration'][$containerConfiguration->getCType()] = $containerConfiguration->toArray();
    $GLOBALS['TCA']['tt_content']['types'][$containerConfiguration->getCType()]['previewRenderer'] = ContainerPreviewRenderer::class;

})();
