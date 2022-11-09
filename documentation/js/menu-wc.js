'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-df0bcf9fc55a3fc040dae73f89f0784d2fdf64d2a978ae5ea10409194250b31e50dcb1fa5b494f451ee4afcb1c54d065899e8ed68bcc0ceedc90379481197081"' : 'data-target="#xs-components-links-module-AppModule-df0bcf9fc55a3fc040dae73f89f0784d2fdf64d2a978ae5ea10409194250b31e50dcb1fa5b494f451ee4afcb1c54d065899e8ed68bcc0ceedc90379481197081"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-df0bcf9fc55a3fc040dae73f89f0784d2fdf64d2a978ae5ea10409194250b31e50dcb1fa5b494f451ee4afcb1c54d065899e8ed68bcc0ceedc90379481197081"' :
                                            'id="xs-components-links-module-AppModule-df0bcf9fc55a3fc040dae73f89f0784d2fdf64d2a978ae5ea10409194250b31e50dcb1fa5b494f451ee4afcb1c54d065899e8ed68bcc0ceedc90379481197081"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-d6a545d44c9efd4d0bc1a8da4dffdc905b8992ae82e9bdf73d6641f92f761ec1748c496df952d4de5af12f5fbc0a9746562bd37242f8762ccdf39a6c6cd56f47"' : 'data-target="#xs-components-links-module-ClientsModule-d6a545d44c9efd4d0bc1a8da4dffdc905b8992ae82e9bdf73d6641f92f761ec1748c496df952d4de5af12f5fbc0a9746562bd37242f8762ccdf39a6c6cd56f47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-d6a545d44c9efd4d0bc1a8da4dffdc905b8992ae82e9bdf73d6641f92f761ec1748c496df952d4de5af12f5fbc0a9746562bd37242f8762ccdf39a6c6cd56f47"' :
                                            'id="xs-components-links-module-ClientsModule-d6a545d44c9efd4d0bc1a8da4dffdc905b8992ae82e9bdf73d6641f92f761ec1748c496df952d4de5af12f5fbc0a9746562bd37242f8762ccdf39a6c6cd56f47"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-4888ae09a06d16e7090bf6919310a9972e005f328efe95e1137d1d62beac28303ff2a46cbbaddb87f5836fed7440108eb4da91d65f3795be4e6a9d07cc30c338"' : 'data-target="#xs-components-links-module-CoreModule-4888ae09a06d16e7090bf6919310a9972e005f328efe95e1137d1d62beac28303ff2a46cbbaddb87f5836fed7440108eb4da91d65f3795be4e6a9d07cc30c338"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-4888ae09a06d16e7090bf6919310a9972e005f328efe95e1137d1d62beac28303ff2a46cbbaddb87f5836fed7440108eb4da91d65f3795be4e6a9d07cc30c338"' :
                                            'id="xs-components-links-module-CoreModule-4888ae09a06d16e7090bf6919310a9972e005f328efe95e1137d1d62beac28303ff2a46cbbaddb87f5836fed7440108eb4da91d65f3795be4e6a9d07cc30c338"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-f27d6b98ee6a3466052255b1a212b6a392e55940765a5d6684d64ca3ee8bdc585e4bdb65fbfefc52b208e90bc4d6216154aa2f0f43b250ebea94320bafa86d87"' : 'data-target="#xs-components-links-module-OrdersModule-f27d6b98ee6a3466052255b1a212b6a392e55940765a5d6684d64ca3ee8bdc585e4bdb65fbfefc52b208e90bc4d6216154aa2f0f43b250ebea94320bafa86d87"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-f27d6b98ee6a3466052255b1a212b6a392e55940765a5d6684d64ca3ee8bdc585e4bdb65fbfefc52b208e90bc4d6216154aa2f0f43b250ebea94320bafa86d87"' :
                                            'id="xs-components-links-module-OrdersModule-f27d6b98ee6a3466052255b1a212b6a392e55940765a5d6684d64ca3ee8bdc585e4bdb65fbfefc52b208e90bc4d6216154aa2f0f43b250ebea94320bafa86d87"' }>
                                            <li class="link">
                                                <a href="components/FormOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' : 'data-target="#xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' :
                                            'id="xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-d587f82f1b1d964e8c3210bbfcc51b4c2b5bf92df81998f60453219ff034aa55023b4cdaabe008f1cc94b1b358208523c99368b6afb31747e525003d0ed1397a"' : 'data-target="#xs-components-links-module-SharedModule-d587f82f1b1d964e8c3210bbfcc51b4c2b5bf92df81998f60453219ff034aa55023b4cdaabe008f1cc94b1b358208523c99368b6afb31747e525003d0ed1397a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d587f82f1b1d964e8c3210bbfcc51b4c2b5bf92df81998f60453219ff034aa55023b4cdaabe008f1cc94b1b358208523c99368b6afb31747e525003d0ed1397a"' :
                                            'id="xs-components-links-module-SharedModule-d587f82f1b1d964e8c3210bbfcc51b4c2b5bf92df81998f60453219ff034aa55023b4cdaabe008f1cc94b1b358208523c99368b6afb31747e525003d0ed1397a"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-d587f82f1b1d964e8c3210bbfcc51b4c2b5bf92df81998f60453219ff034aa55023b4cdaabe008f1cc94b1b358208523c99368b6afb31747e525003d0ed1397a"' : 'data-target="#xs-pipes-links-module-SharedModule-d587f82f1b1d964e8c3210bbfcc51b4c2b5bf92df81998f60453219ff034aa55023b4cdaabe008f1cc94b1b358208523c99368b6afb31747e525003d0ed1397a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-d587f82f1b1d964e8c3210bbfcc51b4c2b5bf92df81998f60453219ff034aa55023b4cdaabe008f1cc94b1b358208523c99368b6afb31747e525003d0ed1397a"' :
                                            'id="xs-pipes-links-module-SharedModule-d587f82f1b1d964e8c3210bbfcc51b4c2b5bf92df81998f60453219ff034aa55023b4cdaabe008f1cc94b1b358208523c99368b6afb31747e525003d0ed1397a"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientsService.html" data-type="entity-link" >ClientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});