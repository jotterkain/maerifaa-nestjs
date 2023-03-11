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
                    <a href="index.html" data-type="index-link">maerifaa documentation</a>
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
                                <a href="modules/AccountsModule.html" data-type="entity-link" >AccountsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountsModule-0a5c1f032f7f494e8ba43d57546a7dfa9e052e1e24d09fab5b5a0d51a02c763bb967e7f0bf810778546e368ed4c00bf81d80cc7579b422579f9afe271f53529f"' : 'data-target="#xs-controllers-links-module-AccountsModule-0a5c1f032f7f494e8ba43d57546a7dfa9e052e1e24d09fab5b5a0d51a02c763bb967e7f0bf810778546e368ed4c00bf81d80cc7579b422579f9afe271f53529f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountsModule-0a5c1f032f7f494e8ba43d57546a7dfa9e052e1e24d09fab5b5a0d51a02c763bb967e7f0bf810778546e368ed4c00bf81d80cc7579b422579f9afe271f53529f"' :
                                            'id="xs-controllers-links-module-AccountsModule-0a5c1f032f7f494e8ba43d57546a7dfa9e052e1e24d09fab5b5a0d51a02c763bb967e7f0bf810778546e368ed4c00bf81d80cc7579b422579f9afe271f53529f"' }>
                                            <li class="link">
                                                <a href="controllers/AccountsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountsModule-0a5c1f032f7f494e8ba43d57546a7dfa9e052e1e24d09fab5b5a0d51a02c763bb967e7f0bf810778546e368ed4c00bf81d80cc7579b422579f9afe271f53529f"' : 'data-target="#xs-injectables-links-module-AccountsModule-0a5c1f032f7f494e8ba43d57546a7dfa9e052e1e24d09fab5b5a0d51a02c763bb967e7f0bf810778546e368ed4c00bf81d80cc7579b422579f9afe271f53529f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountsModule-0a5c1f032f7f494e8ba43d57546a7dfa9e052e1e24d09fab5b5a0d51a02c763bb967e7f0bf810778546e368ed4c00bf81d80cc7579b422579f9afe271f53529f"' :
                                        'id="xs-injectables-links-module-AccountsModule-0a5c1f032f7f494e8ba43d57546a7dfa9e052e1e24d09fab5b5a0d51a02c763bb967e7f0bf810778546e368ed4c00bf81d80cc7579b422579f9afe271f53529f"' }>
                                        <li class="link">
                                            <a href="injectables/AccountsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-23f375dc4bcdd9f0563d56feac745a24e2857010c331f3b7aa815665a6e1e69f33f204d5f885c2942acdaa332a578359eae475ec73d38554f1ca7d0699d9902d"' : 'data-target="#xs-controllers-links-module-AppModule-23f375dc4bcdd9f0563d56feac745a24e2857010c331f3b7aa815665a6e1e69f33f204d5f885c2942acdaa332a578359eae475ec73d38554f1ca7d0699d9902d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-23f375dc4bcdd9f0563d56feac745a24e2857010c331f3b7aa815665a6e1e69f33f204d5f885c2942acdaa332a578359eae475ec73d38554f1ca7d0699d9902d"' :
                                            'id="xs-controllers-links-module-AppModule-23f375dc4bcdd9f0563d56feac745a24e2857010c331f3b7aa815665a6e1e69f33f204d5f885c2942acdaa332a578359eae475ec73d38554f1ca7d0699d9902d"' }>
                                            <li class="link">
                                                <a href="controllers/AccountsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0109f3952c75c5010d251942a4dfb5c4ba9b795d4e9c3da04f446e2464af56ea0ba891740682264dbbb7b441691a31fecbb73bf67a876078c2c8995bf8998122"' : 'data-target="#xs-injectables-links-module-PrismaModule-0109f3952c75c5010d251942a4dfb5c4ba9b795d4e9c3da04f446e2464af56ea0ba891740682264dbbb7b441691a31fecbb73bf67a876078c2c8995bf8998122"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0109f3952c75c5010d251942a4dfb5c4ba9b795d4e9c3da04f446e2464af56ea0ba891740682264dbbb7b441691a31fecbb73bf67a876078c2c8995bf8998122"' :
                                        'id="xs-injectables-links-module-PrismaModule-0109f3952c75c5010d251942a4dfb5c4ba9b795d4e9c3da04f446e2464af56ea0ba891740682264dbbb7b441691a31fecbb73bf67a876078c2c8995bf8998122"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-d9bfb315458628c7ef12891cd41503d3287ec8f8ef0b7c05054a914bb497ad324a77abd545d9673186f8a2e754b4337d0ec9cee9b5be7231ce60d722d435229d"' : 'data-target="#xs-controllers-links-module-UsersModule-d9bfb315458628c7ef12891cd41503d3287ec8f8ef0b7c05054a914bb497ad324a77abd545d9673186f8a2e754b4337d0ec9cee9b5be7231ce60d722d435229d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-d9bfb315458628c7ef12891cd41503d3287ec8f8ef0b7c05054a914bb497ad324a77abd545d9673186f8a2e754b4337d0ec9cee9b5be7231ce60d722d435229d"' :
                                            'id="xs-controllers-links-module-UsersModule-d9bfb315458628c7ef12891cd41503d3287ec8f8ef0b7c05054a914bb497ad324a77abd545d9673186f8a2e754b4337d0ec9cee9b5be7231ce60d722d435229d"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-d9bfb315458628c7ef12891cd41503d3287ec8f8ef0b7c05054a914bb497ad324a77abd545d9673186f8a2e754b4337d0ec9cee9b5be7231ce60d722d435229d"' : 'data-target="#xs-injectables-links-module-UsersModule-d9bfb315458628c7ef12891cd41503d3287ec8f8ef0b7c05054a914bb497ad324a77abd545d9673186f8a2e754b4337d0ec9cee9b5be7231ce60d722d435229d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-d9bfb315458628c7ef12891cd41503d3287ec8f8ef0b7c05054a914bb497ad324a77abd545d9673186f8a2e754b4337d0ec9cee9b5be7231ce60d722d435229d"' :
                                        'id="xs-injectables-links-module-UsersModule-d9bfb315458628c7ef12891cd41503d3287ec8f8ef0b7c05054a914bb497ad324a77abd545d9673186f8a2e754b4337d0ec9cee9b5be7231ce60d722d435229d"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
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
                                <a href="classes/CreateAccountDto.html" data-type="entity-link" >CreateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccountDto.html" data-type="entity-link" >UpdateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
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