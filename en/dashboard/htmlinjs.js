const headers_html = `


<div class="app-content"
                style="margin-top: 60px; overflow-y: scroll; height: 93.7%; width: 101%; overflow-x: hidden;">
                <div class="app-content-header">
                    <h1 class="app-content-headerText"
                        style="background: #20946d4f; padding: 10px; border-radius: 7px;">FARMERS</h1>
                    <button class="mode-switch" title="Switch Theme">
                        <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                            <defs>

                            </defs>
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                    </button>
                </div>
                <div class="app-content-actions">
                <div style="display: flex; column-gap: 5px;">
                    <input class="search-bar" id="gricul-search-bar" placeholder="Search GA-B..." type="text">
                    <a onclick="close_reload()" class="search-bar-close" style="padding: 2px 8px 2px 8px; border-radius: 10px; color: red; cursor: pointer; background: rgba(121, 5, 5, 0.507);">x</a>
                </div>
                    <div class="app-content-actions-wrapper">
                        <div class="filter-button-wrapper">
                            <button class="action-button filter jsFilter">
                                <span>Filtrer</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-filter">
                                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                </svg>
                            </button>
                            <div class="filter-menu">
                                <label>Pays</label>
                                <select id="pays_listing">
                                   <option>Patientez Loading ...</option>
                                </select>

                                <label>Catégorie</label>
                                <select id="categori_listing">
                                    <option>Patientez Loading ...</option>
                                </select>

                                <label>Coopérative</label>
                                <select id="coop_listing">
                                   <option>Patientez Loading ...</option>
                                </select>
                                <div class="filter-menu-buttons" id="ready_tofilter">
                                    <button id="reset_filter" class="filter-button reset" onclick="ResetFilter()">
                                        Reset
                                    </button>
                                    <button id="applay_filter" class="filter-button apply" onclick="">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button class="action-button list active" title="List View">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-list">
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <line x1="3" y1="6" x2="3.01" y2="6" />
                                <line x1="3" y1="12" x2="3.01" y2="12" />
                                <line x1="3" y1="18" x2="3.01" y2="18" />
                            </svg>
                        </button>
                        <button class="action-button grid" title="Grid View">
                            <span id="agri_lenthg">Total: ...</span>
                        </button>
                    </div>
                </div>


                <div class="products-area-wrapper tableView">
                    <div class="products-header">
                        <div class="product-cell image"  title="Unique Internal Farm Identifier">
                            I.E Identity
                            <button class="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                </svg>
                            </button>
                        </div>
                        <div class="product-cell category">
                            Year of Birth
                            <button class="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                </svg>
                            </button>
                        </div>
                        <div class="product-cell status-cell">Gender<button class="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                </svg>
                            </button>
                        </div>
                        <div class="product-cell sales">First Name<button class="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                </svg>
                            </button>
                        </div>
                        <div class="product-cell stock">Last Name<button class="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                </svg>
                            </button>
                        </div>
                        <div class="product-cell price">Phone
                            <button class="sort-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- @@@@@@@@@@ data in tble start @@@@@@@@-->
                    <!-- @@@@@@@@@@ data in tble start @@@@@@@@-->
                    <!-- @@@@@@@@@@ data in tble start @@@@@@@@-->
                    <!-- @@@@@@@@@@ data in tble start @@@@@@@@-->

                    <div id="render_agriculter">
                        <a class="products-row clicbleclass" href="details_view#GA-BIA-001"  target="_blank">
                            <button class="cell-more-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-more-vertical">
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="12" cy="5" r="1" />
                                    <circle cx="12" cy="19" r="1" />
                                </svg>
                            </button>
                            <div class="product-cell image">
                                <img src="https://befree.ci/media/operateurs/photo_2024-06-24_15-53-26.jpg" alt="product">
                                <span>GA-BIA-001</span>
                            </div>
                            <div class="product-cell category">
                                <span class="cell-label">Year of Birth:</span>
                                1980
                            </div>
                            <div class="product-cell status-cell">
                                <span class="cell-label">Genre:</span>
                                <span class="status active">Man</span>
                            </div>
                            <div class="product-cell sales">
                                <span class="cell-label">First Name:</span>
                                Ramde Sylvestre
                            </div>
                            <div class="product-cell stock">
                                <span class="cell-label">Last Name:</span>
                                BONY
                            </div>
                            <div class="product-cell price">
                                <span class="cell-label">First Name:</span>
                                0506369696
                            </div>
                        </a>
                    </div>

                    <!-- @@@@@@@@@@ data in tble ends @@@@@@@@-->
                    <!-- @@@@@@@@@@ data in tble ends @@@@@@@@-->
                    <!-- @@@@@@@@@@ data in tble ends @@@@@@@@-->
                    <!-- @@@@@@@@@@ data in tble ends @@@@@@@@-->


                    <div style="height: 120px;">

                    </div>
                </div>

            </div>


`;