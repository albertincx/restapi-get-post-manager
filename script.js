const STORAGE_KEY = 'postman_tabs_v3';
const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
const BODY_METHODS = ['POST', 'PUT', 'PATCH'];

// Объект с переводами
const TRANSLATIONS = {
    ru: {
        pageTitle: "Postman-подобный клиент (Tailwind)",
        newTabName: "Новый запрос",
        unnamed: "Без названия",
        urlPlaceholder: "URL",
        addHeaderBtn: "+ Добавить заголовок",
        executeRequestBtn: "Выполнить запрос",
        requestResults: "Результаты запроса",
        settingsTitle: "Настройки",
        baseHostLabel: "Базовый URL (хост)",
        baseHostPlaceholder: "https://api.example.com",
        useBaseHostLabel: "Использовать базовый URL при выполнении запросов",
        cancelBtn: "Отмена",
        saveBtn: "Сохранить",
        settingsSaved: "Настройки сохранены!",
        exportBtn: "Экспорт",
        importBtn: "Импорт",
        settingsBtn: "Настройки",
        addTabTooltip: "Добавить новый таб",
        exportTooltip: "Экспорт всех табов",
        importTooltip: "Импортировать табы",
        settingsTooltip: "Настройки приложения",
        headersLabel: "Заголовки (Headers)",
        bodyLabel: "Тело запроса (Body)",
        resultsLoading: "Загрузка...",
        requestError: "Ошибка выполнения запроса",
        responseHeaders: "Заголовки ответа:",
        responseBody: "Тело ответа:",
        responseStatus: "Статус: ",
        timestamp: "Время: ",
        confirmImport: "Вы уверены, что хотите заменить все текущие табы?\nБудет импортировано %d табов.%s",
        importSuccess: "Успешно импортировано %d табов!%s",
        importInvalidFormat: "Файл содержит некорректные данные. Ожидается массив табов или объект с полями tabs и settings.",
        importError: "Ошибка при чтении файла. Возможно, файл поврежден или имеет неверный формат.",
        noTabsToImport: "Файл содержит некорректные данные. Ожидается массив табов.",
        close: "Закрыть",
        renameTab: "Переименовать вкладку",
        deleteTab: "Удалить вкладку",
        confirmDeleteTab: "Вы уверены, что хотите удалить эту вкладку?",
        confirmDeleteBodyTab: "Вы уверены, что хотите удалить этот раздел тела запроса?",
        minimize: "[-]",
        maximize: "[+]",
        emptyKeyPlaceholder: "Ключ",
        emptyValuePlaceholder: "Значение",
        multipleUrlsLabel: "Дополнительные URL для запросов",
        addUrlBtn: "+ Добавить URL",
        languageLabel: "Язык интерфейса",
        multipleRequestsLabel: "Множественные запросы",
        enableMultipleRequests: "Выполнять запросы ко всем URL одновременно",
        webSocketUrlLabel: "URL веб-сокета",
        webSocketUrlPlaceholder: "ws://localhost:8080/ws",
        startWebSocketBtn: "Слушать вебсокет",
        stopWebSocketBtn: "Остановить вебсокет",
        showWebSocketMessages: "Сообщения вебсокета",
        webSocketMessagesTitle: "Сообщения вебсокета",
        webSocketConnected: "Вебсокет подключен",
        webSocketDisconnected: "Вебсокет отключен",
        webSocketConnectionError: "Ошибка подключения к вебсокету",
        commandExecutionLabel: "Настройки выполнения команд",
        commandServerUrlLabel: "URL сервера команд",
        commandServerUrlPlaceholder: "http://localhost:3000/execute",
        sendCommandsViaWebSocketLabel: "Отправлять команды через вебсокет",
        testCommandInputLabel: "Тестовая команда",
        testCommandPlaceholder: "Введите команду для тестирования"
    },
    en: {
        pageTitle: "Postman-like client (Tailwind)",
        newTabName: "New Request",
        unnamed: "Untitled",
        urlPlaceholder: "URL",
        addHeaderBtn: "+ Add Header",
        executeRequestBtn: "Execute Request",
        requestResults: "Request Results",
        settingsTitle: "Settings",
        baseHostLabel: "Base URL (host)",
        baseHostPlaceholder: "https://api.example.com",
        useBaseHostLabel: "Use Base URL when executing requests",
        cancelBtn: "Cancel",
        saveBtn: "Save",
        settingsSaved: "Settings saved!",
        exportBtn: "Export",
        importBtn: "Import",
        settingsBtn: "Settings",
        addTabTooltip: "Add new tab",
        exportTooltip: "Export all tabs",
        importTooltip: "Import tabs",
        settingsTooltip: "Application settings",
        headersLabel: "Headers",
        bodyLabel: "Request Body",
        resultsLoading: "Loading...",
        requestError: "Request execution error",
        responseHeaders: "Response Headers:",
        responseBody: "Response Body:",
        responseStatus: "Status: ",
        timestamp: "Time: ",
        confirmImport: "Are you sure you want to replace all current tabs?\n%d tabs will be imported.%s",
        importSuccess: "Successfully imported %d tabs!%s",
        importInvalidFormat: "File contains invalid data. Expected an array of tabs or an object with tabs and settings fields.",
        importError: "Error reading file. The file may be corrupted or in an incorrect format.",
        noTabsToImport: "File contains invalid data. Expected an array of tabs.",
        close: "Close",
        renameTab: "Rename tab",
        deleteTab: "Delete tab",
        confirmDeleteTab: "Are you sure you want to delete this tab?",
        confirmDeleteBodyTab: "Are you sure you want to delete this body tab?",
        minimize: "[-]",
        maximize: "[+]",
        emptyKeyPlaceholder: "Key",
        emptyValuePlaceholder: "Value",
        multipleUrlsLabel: "Additional URLs for requests",
        addUrlBtn: "+ Add URL",
        languageLabel: "Interface Language",
        multipleRequestsLabel: "Multiple Requests",
        enableMultipleRequests: "Execute requests to all URLs simultaneously",
        webSocketUrlLabel: "WebSocket URL",
        webSocketUrlPlaceholder: "ws://localhost:8080/ws",
        startWebSocketBtn: "Start WebSocket",
        stopWebSocketBtn: "Stop WebSocket",
        showWebSocketMessages: "Show WebSocket Messages",
        webSocketMessagesTitle: "WebSocket Messages",
        webSocketConnected: "WebSocket connected",
        webSocketDisconnected: "WebSocket disconnected",
        webSocketConnectionError: "WebSocket connection error",
        commandExecutionLabel: "Command Execution Settings",
        commandServerUrlLabel: "Command Server URL",
        commandServerUrlPlaceholder: "http://localhost:3000/execute",
        sendCommandsViaWebSocketLabel: "Send commands via WebSocket",
        testCommandInputLabel: "Test Command",
        testCommandPlaceholder: "Enter command to test"
    }
};

// Текущий язык
let currentLanguage = 'en'; // Default value, will be loaded from settings

// Функция получения перевода
function t(key) {
    const translation = TRANSLATIONS[currentLanguage][key];
    return translation !== undefined ? translation : key;
}

// Функция обновления интерфейса после смены языка
function updateLanguage() {
    // Обновляем заголовок страницы
    document.getElementById('pageTitle').textContent = t('pageTitle');

    // Обновляем атрибут языка HTML
    document.documentElement.lang = currentLanguage;

    // Обновляем все открытые табы
    tabs.forEach(tab => {
        renderTabContentFresh(tab.id, true); // Обновляем без активации
    });

    // Обновляем кнопки в верхней панели (если они уже созданы)
    const exportBtn = document.querySelector('#tabsContainer button:nth-last-child(3)');
    const importBtn = document.querySelector('#tabsContainer button:nth-last-child(2)');
    const settingsBtn = document.querySelector('#tabsContainer button:last-child');

    if (exportBtn) exportBtn.textContent = t('exportBtn');
    if (importBtn) importBtn.textContent = t('importBtn');
    if (settingsBtn) settingsBtn.textContent = t('settingsBtn');

    // Сохраняем язык в настройках
    const settings = loadSettings();
    settings.language = currentLanguage;
    saveSettings(settings);
}

let tabs = [];
let currentTabId = null;
let nextId = 1;
let webSocket = null;
let webSocketMessages = [];
let isWebSocketConnected = false;

// === Утилиты ===
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

// === localStorage ===
function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tabs));
}

function loadFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        try {
            tabs = JSON.parse(data);
            if (tabs.length > 0) {
                nextId = Math.max(...tabs.map(t => t.id)) + 1;

                // Migrate old tabs to new structure if needed
                tabs = tabs.map(tab => {
                    // If the tab has the old 'body' field, convert it to the new structure
                    if (tab.hasOwnProperty('body') && !tab.hasOwnProperty('bodyTabs')) {
                        tab.bodyTabs = [
                            {id: 1, name: 'Body 1', content: tab.body || ''}
                        ];
                        tab.activeBodyTabId = 1;
                        // Remove the old body field
                        delete tab.body;
                    }
                    // Ensure bodyTabs and activeBodyTabId exist for all tabs
                    if (!tab.bodyTabs) {
                        tab.bodyTabs = [
                            {id: 1, name: 'Body 1', content: ''}
                        ];
                        tab.activeBodyTabId = 1;
                    }
                    if (!tab.activeBodyTabId) {
                        tab.activeBodyTabId = tab.bodyTabs[0]?.id || 1;
                    }
                    return tab;
                });

                tabs.forEach(tab => renderTabUI(tab));
                activateTab(tabs[0].id);
                renderTabContentFresh(tabs[0].id);
                return;
            }
        } catch (e) {
            console.error('Ошибка загрузки из localStorage', e);
        }
    }
    createNewTab();
}

// === Создание таба ===
function createNewTab(name = t('newTabName')) {
    const newTab = {
        id: nextId++,
        name,
        url: 'https://httpbin.org/get',
        method: 'GET',
        headers: [{key: '', value: ''}],
        bodyTabs: [
            {id: 1, name: 'Body 1', content: ''}
        ],
        activeBodyTabId: 1,
        lastResult: null
    };
    tabs.push(newTab);
    // console.log('aaa', newTab)
    renderTabUI(newTab);
    activateTab(newTab.id);
    saveToStorage();
}

// === Дублирование таба ===
function duplicateTab(id) {
    const originalTab = tabs.find(t => t.id === id);
    if (!originalTab) return;

    const newTab = {
        id: nextId++,
        name: originalTab.name + ' (copy)',
        url: originalTab.url,
        method: originalTab.method,
        headers: JSON.parse(JSON.stringify(originalTab.headers)), // Deep copy headers
        bodyTabs: JSON.parse(JSON.stringify(originalTab.bodyTabs)), // Deep copy body tabs
        activeBodyTabId: originalTab.activeBodyTabId,
        lastResult: originalTab.lastResult ? JSON.parse(JSON.stringify(originalTab.lastResult)) : null
    };
    tabs.push(newTab);
    renderTabUI(newTab);
    activateTab(newTab.id);
    saveToStorage();
}

// === Удаление таба ===
function removeTab(id) {
    if (tabs.length <= 1) return;

    // Show confirmation dialog
    if (!confirm(t('confirmDeleteTab'))) {
        return; // Cancel deletion if user clicks "Cancel"
    }

    tabs = tabs.filter(t => t.id !== id);
    document.querySelector(`.tab[data-id="${id}"]`)?.remove();
    document.querySelector(`.tab-content[data-id="${id}"]`)?.remove();

    const nextId = tabs[0]?.id;
    if (nextId !== undefined) activateTab(nextId);
    saveToStorage();
}

// === Обновление данных таба ===
function updateTabData(id, updates) {
    const tab = tabs.find(t => t.id === id);
    if (tab) {
        // Ensure bodyTabs and activeBodyTabId are properly maintained
        if (updates.bodyTabs) {
            tab.bodyTabs = updates.bodyTabs;
        }
        if (updates.activeBodyTabId !== undefined) {
            tab.activeBodyTabId = updates.activeBodyTabId;
        }

        // Apply other updates
        Object.assign(tab, updates);
        saveToStorage();
    }
}

// === Рендер UI таба (верхняя панель) ===
function renderTabUI(tabData) {
    const tabEl = document.createElement('div');
    tabEl.className = `tab px-3 py-2 bg-white border border-gray-300 rounded-t-md mr-1 relative cursor-pointer ${currentTabId === tabData.id ? 'bg-gray-50 font-bold' : ''}`;
    tabEl.dataset.id = tabData.id;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = tabData.name;
    input.className = 'tab-input bg-transparent border-none outline-none font-inherit';
    input.readOnly = true;

    input.addEventListener('dblclick', () => {
        input.readOnly = false;
        input.focus();
    });
    input.addEventListener('blur', () => {
        input.readOnly = true;
        const newName = input.value.trim() || t('unnamed');
        updateTabData(tabData.id, {name: newName});
        input.value = newName;
    });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') input.blur();
    });

    const duplicateButton = document.createElement('button');
    duplicateButton.className = 'close-btn absolute -top-1 left-0 bg-blue-100 text-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity';
    duplicateButton.innerHTML = '=';
    duplicateButton.title = 'Duplicate tab';
    duplicateButton.addEventListener('click', (e) => {
        e.stopPropagation();
        // Show confirmation dialog before duplicating tab
        if (confirm('Are you sure you want to duplicate this tab?')) {
            duplicateTab(tabData.id);
        }
    });

    const closeButton = document.createElement('button');
    closeButton.className = 'close-btn absolute -top-1 -right-1 bg-red-100 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity';
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        removeTab(tabData.id);
    });

    tabEl.classList.add('group');
    tabEl.appendChild(input);
    tabEl.appendChild(duplicateButton);
    tabEl.appendChild(closeButton);
    tabEl.addEventListener('click', () => activateTab(tabData.id));

    document.querySelector('#tabsContainer').appendChild(tabEl);
    renderTabContentFresh(tabData.id);
}

// === Активация таба ===
function activateTab(id) {
    currentTabId = id;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('bg-gray-50', 'font-bold'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));

    const tabEl = document.querySelector(`.tab[data-id="${id}"]`);
    const contentEl = document.querySelector(`.tab-content[data-id="${id}"]`);
    if (tabEl) {
        tabEl.classList.add('bg-gray-50', 'font-bold');
        const tabData = tabs.find(t => t.id === id);
        // console.log(tabEl, tabData);
        let a = document.querySelector('#active-tab-name');
        if (a && tabData) a.innerHTML = '(' + tabData.name + ')';
    }
    if (contentEl) contentEl.classList.remove('hidden');
}

// === Рендер контента таба ===
function renderTabContent(tabData) {
    const content = document.createElement('div');
    content.className = 'tab-content hidden flex flex-row bg-white overflow-hidden';
    content.dataset.id = tabData.id;

    // Основная панель запроса
    const requestPanel = document.createElement('div');
    requestPanel.className = 'flex-1 flex-col overflow-y-auto p-4';

    // Метод + URL
    const methodUrlGroup = document.createElement('div');
    methodUrlGroup.className = 'flex gap-2 mb-4';
    methodUrlGroup.innerHTML = `
        <select id="method-${tabData.id}" class="px-3 py-2 border border-gray-300 rounded w-24">
          ${METHODS.map(m => `<option ${m === tabData.method ? 'selected' : ''}>${m}</option>`).join('')}
        </select>
        <input type="text" id="url-${tabData.id}" value="${tabData.url}" placeholder="${t('urlPlaceholder')}" class="flex-1 px-3 py-2 border border-gray-300 rounded" />
      `;

    // Заголовки
    const headersGroup = document.createElement('div');
    headersGroup.className = 'mb-4';
    headersGroup.innerHTML = `<label class="block font-bold text-sm mb-2">${t('headersLabel')}</label><div id="headers-list-${tabData.id}" class="space-y-2 mb-2"></div>`;

    const headersList = headersGroup.querySelector(`#headers-list-${tabData.id}`);
    renderHeaders(headersList, tabData.headers, tabData.id);

    const addHeaderBtn = document.createElement('button');
    addHeaderBtn.className = 'px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600';
    addHeaderBtn.textContent = t('addHeaderBtn');
    addHeaderBtn.addEventListener('click', () => {
        const newHeaders = [...tabData.headers, {key: '', value: ''}];
        updateTabData(tabData.id, {headers: newHeaders});
        renderTabContentFresh(tabData.id);
    });

    // Тело запроса с вкладками
    const isBodyAllowed = BODY_METHODS.includes(tabData.method);
    const bodyGroup = document.createElement('div');
    bodyGroup.className = 'mb-4';

    // Find the active body tab
    const activeBodyTab = tabData.bodyTabs.find(tab => tab.id === tabData.activeBodyTabId) || tabData.bodyTabs[0];

    bodyGroup.innerHTML = `
        <label class="block font-bold text-sm mb-2">${t('bodyLabel')}</label>
        <div class="flex mb-2">
            <div id="body-tabs-${tabData.id}" class="flex flex-wrap gap-1 mr-2">
                ${tabData.bodyTabs.map((tab, index) => `
                    <div class="body-tab ${tab.id === tabData.activeBodyTabId ? 'active' : ''} px-2 py-1 border rounded text-sm cursor-pointer ${tab.id === tabData.activeBodyTabId ? 'bg-blue-100 border-blue-300' : 'bg-gray-100 border-gray-300'}"
                         data-tab-id="${tab.id}">
                        <span class="body-tab-name">${tab.name}</span>
                        ${tabData.bodyTabs.length > 1 ? `<span class="body-tab-close ml-1 text-red-500">×</span>` : ''}
                    </div>
                `).join('')}
                <button id="add-body-tab-${tabData.id}" class="px-2 py-1 bg-green-100 text-green-700 rounded text-sm border border-green-300 hover:bg-green-200">+</button>
            </div>
        </div>
        <textarea id="body-${tabData.id}" ${!isBodyAllowed ? 'disabled' : ''} class="w-full px-3 py-2 border ${isBodyAllowed ? 'border-gray-300' : 'border-gray-200 bg-gray-100'} rounded font-mono min-h-[120px]">${activeBodyTab ? activeBodyTab.content : ''}</textarea>
      `;

    // Кнопки выполнить запрос для каждого URL
    const executeBtnContainer = document.createElement('div');
    executeBtnContainer.id = `execute-buttons-container-${tabData.id}`;
    executeBtnContainer.className = 'flex flex-wrap gap-2 mb-4 mt-2';

    // Создаем кнопки выполнения запроса
    updateExecuteButtons(tabData.id, executeBtnContainer);

    requestPanel.appendChild(methodUrlGroup);
    requestPanel.appendChild(headersGroup);
    requestPanel.appendChild(addHeaderBtn);
    requestPanel.appendChild(bodyGroup);
    requestPanel.appendChild(executeBtnContainer);

    // Панель с результатами (сайдбар)
    const resultsPanel = document.createElement('div');
    resultsPanel.id = `results-sidebar-${tabData.id}`;
    resultsPanel.className = 'w-1/3 border-l border-gray-300 bg-gray-50 overflow-y-auto hidden';

    // Заголовок панели результатов
    const resultsHeader = document.createElement('div');
    resultsHeader.className = 'p-3 bg-gray-100 border-b border-gray-300 flex justify-between items-center';
    resultsHeader.innerHTML = `
            <h3 class="font-bold">${t('requestResults')}</h3>
            <button id="toggle-results-${tabData.id}" class="text-gray-500 hover:text-gray-700">${t('minimize')}</button>
        `;

    // Кнопка переключения видимости сайдбара
    const toggleBtn = resultsHeader.querySelector(`#toggle-results-${tabData.id}`);
    toggleBtn.addEventListener('click', () => {
        resultsPanel.classList.toggle('hidden');
        toggleBtn.textContent = resultsPanel.classList.contains('hidden') ? t('maximize') : t('minimize');
    });

    // Контейнер для результатов
    const resultsContainer = document.createElement('div');
    resultsContainer.id = `results-container-${tabData.id}`;
    resultsContainer.className = 'p-4';

    // Восстанавливаем предыдущий результат, если он был
    if (tabData.lastResult) {
        updateResultsDisplay(tabData.id, tabData.lastResult, tabData.lastResult.error ? 'error' : 'success');
    }

    resultsPanel.appendChild(resultsHeader);
    resultsPanel.appendChild(resultsContainer);

    content.appendChild(requestPanel);
    content.appendChild(resultsPanel);

    // Обработчики
    const methodSelect = requestPanel.querySelector(`#method-${tabData.id}`);
    const urlInput = requestPanel.querySelector(`#url-${tabData.id}`);
    const bodyTextarea = requestPanel.querySelector(`#body-${tabData.id}`);

    methodSelect.addEventListener('change', (e) => {
        updateTabData(tabData.id, {method: e.target.value});
        const allowed = BODY_METHODS.includes(e.target.value);
        bodyTextarea.disabled = !allowed;
        bodyTextarea.classList.toggle('bg-gray-100', !allowed);
        bodyTextarea.classList.toggle('border-gray-200', !allowed);
        bodyTextarea.classList.toggle('border-gray-300', allowed);
        if (!allowed) {
            bodyTextarea.value = '';
            // Clear all body tabs content when method doesn't allow body
            const updatedBodyTabs = tabData.bodyTabs.map(tab => ({
                ...tab,
                content: ''
            }));
            updateTabData(tabData.id, {bodyTabs: updatedBodyTabs});
        }
    });

    urlInput.addEventListener('input', debounce((e) => {
        updateTabData(tabData.id, {url: e.target.value});
    }, 300));

    bodyTextarea.addEventListener('input', debounce((e) => {
        // Update the active body tab content
        const tab = tabs.find(t => t.id === tabData.id);
        if (tab) {
            const activeTab = tab.bodyTabs.find(bt => bt.id === tab.activeBodyTabId);
            if (activeTab) {
                activeTab.content = e.target.value;
                updateTabData(tabData.id, {bodyTabs: tab.bodyTabs});
            }
        }
    }, 300));

    // Add event listeners for body tabs
    const bodyTabsContainer = requestPanel.querySelector(`#body-tabs-${tabData.id}`);
    if (bodyTabsContainer) {
        // console.log('console.log(e.target);');
        // Add click event for switching body tabs
        bodyTabsContainer.addEventListener('click', (e) => {
            let isClose = e.target.classList.contains('body-tab-close')
            // Handle tab switching
            const tabElement = e.target.closest('.body-tab');
            if (tabElement && !isClose) {
                const tabId = parseInt(tabElement.dataset.tabId);
                if (!isNaN(tabId)) {
                    // Update active tab
                    updateTabData(tabData.id, {activeBodyTabId: tabId});

                    // Re-render the content to update the UI
                    renderTabContentFresh(tabData.id);
                }
                return;
            }

            // Handle tab closing
            if (isClose) {
                const tabElement = e.target.closest('.body-tab');

                if (tabElement) {
                    const tabId = parseInt(tabElement.dataset.tabId);
                    if (!isNaN(tabId) && tabData.bodyTabs.length > 1) {
                        // Show confirmation dialog before removing body tab
                        if (confirm(t('confirmDeleteBodyTab'))) {
                            // Remove the tab
                            const updatedTabs = tabData.bodyTabs.filter(tab => tab.id !== tabId);

                            // Update active tab if the removed tab was active
                            let newActiveTabId = tabData.activeBodyTabId;
                            if (tabId === tabData.activeBodyTabId) {
                                newActiveTabId = updatedTabs[0].id;
                            }

                            updateTabData(tabData.id, {
                                bodyTabs: updatedTabs,
                                activeBodyTabId: newActiveTabId
                            });

                            // Re-render the content to update the UI
                            renderTabContentFresh(tabData.id);
                        }
                    }
                }
                return;
            }

            // Handle adding new body tab
            if (e.target.id === `add-body-tab-${tabData.id}`) {
                // Show confirmation dialog before adding body tab
                if (confirm('Are you sure you want to add a new body tab?')) {
                    const newTabId = Math.max(...tabData.bodyTabs.map(t => t.id)) + 1;
                    const newBodyTabs = [
                        ...tabData.bodyTabs,
                        {id: newTabId, name: `Body ${newTabId}`, content: ''}
                    ];

                    updateTabData(tabData.id, {
                        bodyTabs: newBodyTabs,
                        activeBodyTabId: newTabId
                    });

                    // Re-render the content to update the UI
                    renderTabContentFresh(tabData.id);
                }
            }
        });
    }

    document.body.appendChild(content);
}

// === Рендер заголовков ===
function renderHeaders(container, headers, tabId) {
    container.innerHTML = '';
    headers.forEach((header, index) => {
        const row = document.createElement('div');
        row.className = 'flex gap-2';
        row.innerHTML = `
          <input type="text" placeholder="${t('emptyKeyPlaceholder')}" value="${header.key}" class="flex-1 px-2 py-1 border border-gray-300 rounded text-sm" />
                    <input type="text" placeholder="${t('emptyValuePlaceholder')}" value="${header.value}" class="flex-1 px-2 py-1 border border-gray-300 rounded text-sm" />
          <button class="w-7 h-7 flex items-center justify-center bg-red-100 text-red-500 rounded hover:bg-red-200 text-sm">×</button>
        `;

        const keyInput = row.querySelector('input:first-child');
        const valueInput = row.querySelector('input:last-of-type'); // второй input
        const removeBtn = row.querySelector('button');

        keyInput.addEventListener('input', debounce((e) => {
            headers[index].key = e.target.value;
            updateTabData(tabId, {headers: [...headers]});
        }, 300));

        valueInput.addEventListener('input', debounce((e) => {
            headers[index].value = e.target.value;
            updateTabData(tabId, {headers: [...headers]});
        }, 300));

        removeBtn.addEventListener('click', () => {
            // Show confirmation dialog before removing header
            if (confirm('Are you sure you want to delete this header?')) {
                headers.splice(index, 1);
                updateTabData(tabId, {headers: [...headers]});
                renderTabContentFresh(tabId);
            }
        });

        container.appendChild(row);
    });
}

// === Перерисовка контента таба ===
function renderTabContentFresh(tabId, updateWithoutActivate = false) {
    const oldContent = document.querySelector(`.tab-content[data-id="${tabId}"]`);
    if (oldContent) oldContent.remove();
    const tabData = tabs.find(t => t.id === tabId);
    // console.log('tabData');
    // console.log(tabData, tabId);
    if (tabData) {
        renderTabContent(tabData);
        if (currentTabId === tabId && !updateWithoutActivate) {
            activateTab(tabId);
        }
    }
}

// === Инициализация приложения ===

let showSe = false
let showTa = false

// === Управление настройками ===
function showSettings() {
    if (showSe) return;
    showSe = true
    // Создаем модальное окно для настроек
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.id = 'settings-modal';

    // Содержимое модального окна
    const settingsContent = document.createElement('div');
    settingsContent.className = 'bg-white p-6 rounded-lg shadow-lg w-96 max-w-full mx-4 modal-content';
    settingsContent.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold">${t('settingsTitle')}</h2>
                <button id="close-settings" class="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <div class="mb-4">
                <label class="block font-bold text-sm mb-2">${t('baseHostLabel')}</label>
                <input type="text" id="base-host-input" placeholder="${t('baseHostPlaceholder')}" class="w-full px-3 py-2 border border-gray-300 rounded" />
                <p class="text-xs text-gray-500 mt-1">Если указан, будет добавлен к началу всех URL запросов</p>
            </div>
            <div class="mb-4">
                <label class="flex items-center">
                    <input type="checkbox" id="use-base-host-checkbox" class="mr-2" />
                    <span class="text-sm">${t('useBaseHostLabel')}</span>
                </label>
            </div>
            <div class="mb-4">
                <label class="block font-bold text-sm mb-2">${t('multipleUrlsLabel')}</label>
                <div id="urls-container" class="space-y-2 mb-2"></div>
                <button id="add-url-btn" class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 mt-2">${t('addUrlBtn')}</button>
            </div>
            <div class="mb-4">
                <label class="block font-bold text-sm mb-2">${t('languageLabel')}</label>
                <select id="language-select" class="w-full px-3 py-2 border border-gray-300 rounded">
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="flex items-center">
                    <input type="checkbox" id="enable-multiple-requests" class="mr-2" />
                    <span class="text-sm">${t('enableMultipleRequests')}</span>
                </label>
            </div>
            <div class="mb-4">
                <label class="block font-bold text-sm mb-2">${t('webSocketUrlLabel')}</label>
                <input type="text" id="websocket-url-input" placeholder="${t('webSocketUrlPlaceholder')}" class="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            <div class="mb-4 flex space-x-2">
                <button id="start-websocket-btn" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex-1">${t('startWebSocketBtn')}</button>
                <button id="stop-websocket-btn" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex-1">${t('stopWebSocketBtn')}</button>
            </div>
            <div class="mb-4">
                <label class="block font-bold text-sm mb-2">${t('commandExecutionLabel')}</label>
                <div class="mb-2">
                    <label class="block text-sm mb-1">${t('commandServerUrlLabel')}</label>
                    <input type="text" id="command-server-url-input" placeholder="${t('commandServerUrlPlaceholder')}" class="w-full px-3 py-2 border border-gray-300 rounded" />
                </div>
                <div class="mb-2">
                    <label class="flex items-center">
                        <input type="checkbox" id="send-commands-via-websocket" class="mr-2" />
                        <span class="text-sm">${t('sendCommandsViaWebSocketLabel')}</span>
                    </label>
                </div>
                <div class="mb-2">
                    <label class="block text-sm mb-1">${t('testCommandInputLabel')}</label>
                    <input type="text" id="test-command-input" placeholder="${t('testCommandPlaceholder')}" class="w-full px-3 py-2 border border-gray-300 rounded text-sm" value="test" />
                </div>
                <div class="mt-2">
                    <button id="test-command-btn" class="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">
                        Test Command
                    </button>
                </div>
            </div>
            <div class="flex justify-end space-x-2">
                <button id="cancel-settings" class="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">${t('cancelBtn')}</button>
                <button id="save-settings" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">${t('saveBtn')}</button>
            </div>
        `;

    modal.appendChild(settingsContent);
    document.body.appendChild(modal);

    // Загружаем текущие настройки
    const settings = loadSettings();
    document.getElementById('base-host-input').value = settings.baseHost || '';
    document.getElementById('use-base-host-checkbox').checked = settings.useBaseHost;
    document.getElementById('websocket-url-input').value = settings.webSocketUrl || '';
    document.getElementById('command-server-url-input').value = settings.commandServerUrl || '';
    document.getElementById('send-commands-via-websocket').checked = settings.sendCommandsViaWebSocket || false;
    document.getElementById('test-command-input').value = settings.defaultTestCommand || 'test';

    // Update WebSocket buttons to reflect connection status
    updateWebSocketButton();

    // Загрузка дополнительных URL
    const urlsContainer = document.getElementById('urls-container');
    const additionalUrls = settings.additionalUrls || [];
    urlsContainer.innerHTML = '';
    additionalUrls.forEach((url, index) => {
        addUrlInput(urlsContainer, url, index);
    });

    // Добавляем один пустой URL, если нет дополнительных URL
    if (additionalUrls.length === 0) {
        addUrlInput(urlsContainer, '', 0);
    }

    // Настройка языка
    document.getElementById('language-select').value = settings.language || 'ru';

    // Множественные запросы
    document.getElementById('enable-multiple-requests').checked = settings.enableMultipleRequests || false;

    // Обработчик нажатия клавиши ESC
    function handleEscKey(event) {
        if (event.key === 'Escape') {
            closeSettingsModal();
        }
    }

    // Функция закрытия модального окна
    function closeSettingsModal() {
        // Удаляем обработчик клавиатуры
        document.removeEventListener('keydown', handleEscKey);
        closeModal(modal);
        showSe = false
    }

    // Обработчики кнопок
    document.getElementById('close-settings').addEventListener('click', closeSettingsModal);
    document.getElementById('cancel-settings').addEventListener('click', closeSettingsModal);

    // WebSocket control buttons
    document.getElementById('start-websocket-btn').addEventListener('click', (e) => {
        e.preventDefault();
        // Get the WebSocket URL from the input field
        const webSocketUrl = document.getElementById('websocket-url-input').value.trim();
        if (!webSocketUrl) {
            showNotification('Please enter a WebSocket URL first', 'warning');
            return;
        }

        // Update the settings with the new URL
        const baseHost = document.getElementById('base-host-input').value.trim();
        const useBaseHost = document.getElementById('use-base-host-checkbox').checked;
        const urlsContainer = document.getElementById('urls-container');
        const urlInputs = urlsContainer.querySelectorAll('input');
        const additionalUrls = [];
        urlInputs.forEach(input => {
            if (input.value.trim()) {
                additionalUrls.push(input.value.trim());
            }
        });
        const selectedLanguage = document.getElementById('language-select').value;
        const enableMultipleRequests = document.getElementById('enable-multiple-requests').checked;

        // Get command settings
        const commandServerUrl = document.getElementById('command-server-url-input').value.trim();
        const sendCommandsViaWebSocket = document.getElementById('send-commands-via-websocket').checked;
        const defaultTestCommand = document.getElementById('test-command-input').value.trim() || 'test';

        saveSettings({
            baseHost,
            useBaseHost,
            additionalUrls,
            language: selectedLanguage,
            enableMultipleRequests,
            webSocketUrl,
            commandServerUrl,
            sendCommandsViaWebSocket,
            defaultTestCommand
        });

        // Start the WebSocket
        startWebSocket();
    });

    document.getElementById('stop-websocket-btn').addEventListener('click', (e) => {
        e.preventDefault();
        stopWebSocket();
    });

    // Сохраняем обработчик в глобальную переменную для использования в closeModal
    window.settingsEscHandler = handleEscKey;

    // Добавляем обработчик клавиатуры
    document.addEventListener('keydown', handleEscKey);

    // Функция для добавления поля ввода URL
    function addUrlInput(container, value = '', index) {
        const row = document.createElement('div');
        row.className = 'flex gap-2 mb-2';
        row.innerHTML = `
                <input type="text" value="${value}" placeholder="https://api.example.com" class="flex-1 px-2 py-1 border border-gray-300 rounded text-sm" />
                <button class="w-7 h-7 flex items-center justify-center bg-red-100 text-red-500 rounded hover:bg-red-200 text-sm">×</button>
            `;

        const input = row.querySelector('input');
        const removeBtn = row.querySelector('button');

        removeBtn.addEventListener('click', () => {
            container.removeChild(row);
            // Если нет ни одного поля, добавим хотя бы одно пустое
            if (container.children.length === 0) {
                addUrlInput(container, '', 0);
            }
        });

        container.appendChild(row);
    }

    // Обработчик кнопки добавления URL
    document.getElementById('add-url-btn').addEventListener('click', () => {
        const urlsContainer = document.getElementById('urls-container');
        addUrlInput(urlsContainer, '', urlsContainer.children.length);
    });

    // Обработчик кнопки тестирования команды
    document.getElementById('test-command-btn').addEventListener('click', async () => {
        const commandServerUrl = document.getElementById('command-server-url-input').value.trim();
        const sendCommandsViaWebSocket = document.getElementById('send-commands-via-websocket').checked;
        const testCommand = document.getElementById('test-command-input').value.trim() || 'test';

        // Save the current settings temporarily
        const settings = loadSettings();
        saveSettings({
            ...settings,
            commandServerUrl,
            sendCommandsViaWebSocket
        });

        // Execute the custom test command
        const result = await executeCommand(testCommand, {
            message: `This is a test of command: ${testCommand}`,
            timestamp: new Date().toISOString()
        });

        if (result.success) {
            showNotification(`Command "${testCommand}" executed successfully via ${result.method}`, 'success');
        } else {
            showNotification(`Command "${testCommand}" failed: ${result.error}`, 'error');
        }
    });

    document.getElementById('save-settings').addEventListener('click', () => {
        const baseHost = document.getElementById('base-host-input').value.trim();
        const useBaseHost = document.getElementById('use-base-host-checkbox').checked;

        // Получаем дополнительные URL
        const urlsContainer = document.getElementById('urls-container');
        const urlInputs = urlsContainer.querySelectorAll('input');
        const additionalUrls = [];
        urlInputs.forEach(input => {
            if (input.value.trim()) {
                additionalUrls.push(input.value.trim());
            }
        });

        // Получаем выбранный язык
        const selectedLanguage = document.getElementById('language-select').value;

        // Получаем состояние множественных запросов
        const enableMultipleRequests = document.getElementById('enable-multiple-requests').checked;

        // Получаем WebSocket URL
        const webSocketUrl = document.getElementById('websocket-url-input').value.trim();

        // Получаем Command Server URL
        const commandServerUrl = document.getElementById('command-server-url-input').value.trim();

        // Получаем состояние чекбокса отправки команд через WebSocket
        const sendCommandsViaWebSocket = document.getElementById('send-commands-via-websocket').checked;

        // Получаем значение тестовой команды
        const defaultTestCommand = document.getElementById('test-command-input').value.trim() || 'test';

        // Сохраняем настройки
        saveSettings({
            baseHost,
            useBaseHost,
            additionalUrls,
            language: selectedLanguage,
            enableMultipleRequests,
            webSocketUrl,
            commandServerUrl,
            sendCommandsViaWebSocket,
            defaultTestCommand
        });

        // Обновляем язык приложения
        if (currentLanguage !== selectedLanguage) {
            currentLanguage = selectedLanguage;
            updateLanguage();
        }

        // Обновляем кнопки выполнения запроса во всех табах
        tabs.forEach(tab => {
            const container = document.getElementById(`execute-buttons-container-${tab.id}`);
            if (container) {
                updateExecuteButtons(tab.id, container);
            }
        });

        // Закрываем модальное окно
        closeSettingsModal();

        showNotification(t('settingsSaved'));
    });
}

// === Загрузка настроек ===
function loadSettings() {
    const settingsStr = localStorage.getItem('postman_settings');
    if (settingsStr) {
        try {
            const settings = JSON.parse(settingsStr);
            // Убедимся, что у нас есть все необходимые поля
            return {
                baseHost: settings.baseHost || '',
                useBaseHost: settings.useBaseHost || false,
                additionalUrls: settings.additionalUrls || [],
                language: settings.language || (localStorage.getItem('app_language') || 'ru'),
                enableMultipleRequests: settings.enableMultipleRequests || false,
                webSocketUrl: settings.webSocketUrl || '',
                commandServerUrl: settings.commandServerUrl || '',
                sendCommandsViaWebSocket: settings.sendCommandsViaWebSocket || false,
                defaultTestCommand: settings.defaultTestCommand || 'test'
            };
        } catch (e) {
            console.error('Ошибка при загрузке настроек', e);
            return {
                baseHost: '',
                useBaseHost: false,
                additionalUrls: [],
                language: localStorage.getItem('app_language') || 'ru',
                enableMultipleRequests: false,
                webSocketUrl: '',
                commandServerUrl: '',
                sendCommandsViaWebSocket: false,
                defaultTestCommand: 'test'
            };
        }
    }
    return {
        baseHost: '',
        useBaseHost: false,
        additionalUrls: [],
        language: localStorage.getItem('app_language') || 'ru',
        enableMultipleRequests: false,
        webSocketUrl: '',
        commandServerUrl: '',
        sendCommandsViaWebSocket: false,
        defaultTestCommand: 'test'
    };
}

// === Сохранение настроек ===
function saveSettings(settings) {
    localStorage.setItem('postman_settings', JSON.stringify(settings));
}

// === Выполнение команды через HTTP или WebSocket ===
async function executeCommand(command, params = {}) {
    const settings = loadSettings();

    if (settings.sendCommandsViaWebSocket && isWebSocketConnected && webSocket) {
        // Отправляем команду через WebSocket
        try {
            const commandData = {
                type: 'command',
                command: command,
                params: params,
                timestamp: Date.now()
            };
            webSocket.send(JSON.stringify(commandData));
            showNotification(`Command "${command}" sent via WebSocket`, 'info');
            return {success: true, method: 'websocket', command: commandData};
        } catch (error) {
            console.error('Error sending command via WebSocket:', error);
            showNotification(`Error sending command via WebSocket: ${error.message}`, 'error');
            return {success: false, error: error.message, method: 'websocket'};
        }
    } else if (settings.commandServerUrl) {
        // Отправляем команду через HTTP
        try {
            const response = await fetch(settings.commandServerUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    command: command,
                    params: params,
                    timestamp: Date.now()
                })
            });

            const result = await response.json();
            showNotification(`Command "${command}" executed via HTTP`, 'info');
            return {success: true, result: result, method: 'http'};
        } catch (error) {
            console.error('Error executing command via HTTP:', error);
            showNotification(`Error executing command via HTTP: ${error.message}`, 'error');
            return {success: false, error: error.message, method: 'http'};
        }
    } else {
        // Ни WebSocket, ни сервер команд не настроен
        const errorMsg = 'No command execution method configured. Please set Command Server URL or connect WebSocket and enable sending commands via WebSocket.';
        showNotification(errorMsg, 'warning');
        return {success: false, error: errorMsg, method: 'none'};
    }
}

// === Закрытие модального окна ===
function closeModal(ma) {
    // Удаляем обработчик клавиатуры при закрытии модального окна, если он существует
    if (window.settingsEscHandler) {
        document.removeEventListener('keydown', window.settingsEscHandler);
    }
    document.body.removeChild(ma);
    showTa = false
    showSe = false
}

// === Получение финального URL с учетом настроек ===
function getFinalUrl(originalUrl) {
    const settings = loadSettings();
    // console.log(originalUrl)
    if (settings.useBaseHost && settings.baseHost) {
        // Проверяем, является ли URL относительным
        if (originalUrl.startsWith('/')) {
            // Относительный URL - добавляем базовый хост
            return settings.baseHost + originalUrl;
        } else if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
            // Относительный URL без слэша - добавляем базовый хост
            return settings.baseHost + '/' + originalUrl;
        }
        // Абсолютный URL - возвращаем как есть
        return originalUrl;
    }

    // Если настройка отключена, возвращаем оригинальный URL
    return originalUrl;
}

// === Экспорт табов ===
function exportTabs() {
    // Получаем текущие данные и настройки
    const settings = loadSettings();
    const exportData = {
        tabs: tabs,
        settings: settings
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    // Создаем элемент ссылки для скачивания
    const exportFileDefaultName = 'postman-tabs-export.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click(); // Симулируем клик для скачивания
}

// === Импорт табов ===
function importTabs() {
    // Создаем скрытое поле для выбора файла
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.style.display = 'none';

    fileInput.onchange = function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const importedData = JSON.parse(e.target.result);

                // Проверяем, содержит ли файл как табы, так и настройки
                let importedTabs, importedSettings;

                if (Array.isArray(importedData)) {
                    // Старый формат - только табы
                    importedTabs = importedData;
                    importedSettings = null;
                } else if (importedData.tabs) {
                    // Новый формат - табы и настройки
                    importedTabs = importedData.tabs;
                    importedSettings = importedData.settings || null;
                } else {
                    // Неизвестный формат
                    showNotification(t('importInvalidFormat'));
                    return;
                }

                // Валидация формата данных
                if (!Array.isArray(importedTabs)) {
                    showNotification(t('noTabsToImport'));
                    return;
                }

                // Подтверждение перед импортом
                const settingsText = importedSettings ? t('confirmImport').includes('%s') ? ' ' + t('importSuccess').split('%d')[1].split('%s')[0] : '' : '';
                const confirmMessage = t('confirmImport')
                    .replace('%d', importedTabs.length)
                    .replace('%s', settingsText);

                const confirmed = confirm(confirmMessage);

                if (confirmed) {
                    // Migrate imported tabs to new structure if needed
                    importedTabs = importedTabs.map(tab => {
                        // If the tab has the old 'body' field, convert it to the new structure
                        if (tab.hasOwnProperty('body') && !tab.hasOwnProperty('bodyTabs')) {
                            tab.bodyTabs = [
                                {id: 1, name: 'Body 1', content: tab.body || ''}
                            ];
                            tab.activeBodyTabId = 1;
                            // Remove the old body field
                            delete tab.body;
                        }
                        // Ensure bodyTabs and activeBodyTabId exist for all tabs
                        if (!tab.bodyTabs) {
                            tab.bodyTabs = [
                                {id: 1, name: 'Body 1', content: ''}
                            ];
                            tab.activeBodyTabId = 1;
                        }
                        if (!tab.activeBodyTabId) {
                            tab.activeBodyTabId = tab.bodyTabs[0]?.id || 1;
                        }
                        return tab;
                    });

                    // Заменяем существующие табы на импортированные
                    tabs = importedTabs;

                    // Обновляем nextId на основе максимального ID в импортированных табах
                    if (tabs.length > 0) {
                        nextId = Math.max(...tabs.map(t => t.id)) + 1;
                    } else {
                        nextId = 1;
                    }

                    // Восстанавливаем настройки если они есть
                    if (importedSettings) {
                        saveSettings(importedSettings);
                    }

                    // Очищаем интерфейс
                    document.querySelectorAll('.tab').forEach(el => el.remove());
                    document.querySelectorAll('.tab-content').forEach(el => el.remove());

                    // Рендерим новые табы
                    tabs.forEach(tab => renderTabUI(tab));

                    // Активируем первый таб или создаем новый, если нет табов
                    if (tabs.length > 0) {
                        activateTab(tabs[0].id);
                        renderTabContentFresh(tabs[0].id);
                    } else {
                        createNewTab();
                    }

                    // Сохраняем в localStorage
                    saveToStorage();

                    const successMessage = t('importSuccess')
                        .replace('%d', importedTabs.length)
                        .replace('%s', settingsText ? ' ' + t('importSuccess').split('%d')[1].split('%s')[0] : '');
                    showNotification(successMessage);
                }
            } catch (error) {
                console.error('Ошибка при импорте:', error);
                showNotification(t('importError'));
            }
        };
        reader.readAsText(file);
    };

    // Добавляем элемент в документ и кликаем по нему
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
}

// === Выполнение HTTP запроса ===
async function executeRequest(tabId, targetUrl = null) {
    const tabData = tabs.find(t => t.id === tabId);
    if (!tabData) return;

    // Получаем настройки
    const settings = loadSettings();
    const enableMultipleRequests = settings.enableMultipleRequests || false;
    const additionalUrls = settings.additionalUrls || [];

    // Если включены множественные запросы и targetUrl не указан, выполняем запросы ко всем URL
    if (enableMultipleRequests && !targetUrl) {
        // Создаем массив всех URL для запроса (основной + дополнительные)
        const allUrls = [tabData.url, ...additionalUrls].filter(url => url.trim() !== '');

        if (allUrls.length > 1) {
            // Выполняем параллельные запросы ко всем URL
            const results = await Promise.allSettled(
                allUrls.map(async (url, index) => {
                    // console.log('url + tabData.url')
                    // console.log(url + tabData.url)
                    const result = await executeSingleRequest(tabId, url + tabData.url, ` (URL ${index + 1})`);
                    return {url, result};
                })
            );

            // Формируем объединенный результат
            let combinedResult = '';
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    const url = result.value.url;
                    const requestResult = result.value.result;
                    combinedResult += `<div class="mb-4 p-3 border rounded bg-gray-50"><h4 class="font-bold">URL: ${url}</h4>`;
                    if (requestResult.error) {
                        combinedResult += `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                <h3 class="font-bold">${t('requestError')}</h3>
                                <p>${requestResult.message}</p>
                                <p class="text-xs mt-1">${t('timestamp')} ${requestResult.timestamp}</p>
                            </div>`;
                    } else {
                        combinedResult += `<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                <h3 class="font-bold">${t('responseStatus')}${requestResult.statusCode} ${requestResult.statusText}</h3>
                                <p class="text-xs">${t('timestamp')} ${requestResult.timestamp}</p>
                            </div>`;
                    }
                    combinedResult += '</div>';
                } else {
                    combinedResult += `<div class="mb-4 p-3 border rounded bg-red-50"><h4 class="font-bold">URL: ${allUrls[index]}</h4>
                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                <h3 class="font-bold">${t('requestError')}</h3>
                                <p>${result.reason.message || 'Unknown error'}</p>
                            </div></div>`;
                }
            });

            // Показываем объединенные результаты
            const resultsContainer = document.getElementById(`results-container-${tabId}`);
            if (resultsContainer) {
                resultsContainer.innerHTML = combinedResult;
            }

            return;
        }
    }

    // Если указан конкретный URL или множественные запросы отключены, выполняем обычный запрос
    let urlToUse = targetUrl || tabData.url;
    // console.log('targetUrl, tabData.url')
    // console.log(targetUrl, tabData.url)
    if (urlToUse.match('http') && !tabData.url.match('http')) {
        urlToUse = targetUrl + tabData.url;
    }
    await executeSingleRequest(tabId, urlToUse);
}

// === Выполнение одиночного HTTP запроса ===
async function executeSingleRequest(tabId, targetUrl, suffix = '') {
    const tabData = tabs.find(t => t.id === tabId);
    if (!tabData) return;

    // Показываем сайдбар с результатами, если он скрыт
    const resultsSidebar = document.getElementById(`results-sidebar-${tabId}`);
    if (resultsSidebar) {
        resultsSidebar.classList.remove('hidden');
    }

    // Показываем индикатор загрузки (только для одиночного запроса)
    if (!suffix) {
        updateResultsDisplay(tabId, `<div class="text-blue-500">${t('resultsLoading')}</div>`, 'loading');
    }

    try {
        // Подготовка заголовков
        const headers = {};
        tabData.headers.forEach(header => {
            if (header.key && header.value) {
                headers[header.key] = header.value;
            }
        });

        // Добавляем Content-Type если тело есть
        if (tabData.body && BODY_METHODS.includes(tabData.method)) {
            if (!headers['Content-Type']) {
                headers['Content-Type'] = 'application/json';
            }
        }

        // Подготовка параметров запроса
        const config = {
            method: tabData.method,
            headers: headers,
        };

        // Добавляем тело если метод поддерживает
        if (BODY_METHODS.includes(tabData.method)) {
            const activeBodyTab = tabData.bodyTabs.find(tab => tab.id === tabData.activeBodyTabId) || tabData.bodyTabs[0];
            if (activeBodyTab && activeBodyTab.content) {
                // Проверяем, является ли тело JSON строкой
                try {
                    JSON.parse(activeBodyTab.content);
                    config.body = activeBodyTab.content;
                } catch (e) {
                    // Если не JSON, отправляем как текст
                    config.body = activeBodyTab.content;
                }
            }
        }

        // Получаем финальный URL с учетом настроек
        const finalUrl = getFinalUrl(targetUrl);

        // Выполняем запрос
        const response = await fetch(finalUrl, config);
        const responseBody = await response.text();

        // Формируем результат
        const result = {
            statusCode: response.status,
            statusText: response.statusText,
            headers: Array.from(response.headers.entries()),
            body: responseBody,
            timestamp: new Date().toLocaleString()
        };

        // Если это одиночный запрос (не часть множественного), обновляем дисплей
        if (!suffix) {
            // Отображаем результат
            updateResultsDisplay(tabId, result, 'success');

            // Сохраняем результат в табе
            updateTabData(tabId, {lastResult: result});
        }

        return {url: targetUrl, result};

    } catch (error) {
        // Обработка ошибки
        const errorResult = {
            error: true,
            message: error.message,
            timestamp: new Date().toLocaleString()
        };

        // Если это одиночный запрос (не часть множественного), обновляем дисплей
        if (!suffix) {
            updateResultsDisplay(tabId, errorResult, 'error');

            // Сохраняем результат ошибки в табе
            updateTabData(tabId, {lastResult: errorResult});
        }

        return {url: targetUrl, result: errorResult};
    }
}

// === Обновление кнопок выполнения запроса ===
function updateExecuteButtons(tabId, container) {
    const tabData = tabs.find(t => t.id === tabId);
    if (!tabData) return;

    // Получаем настройки для получения дополнительных URL
    const settings = loadSettings();
    const additionalUrls = settings.additionalUrls || [];

    // Очищаем контейнер
    container.innerHTML = '';

    // Создаем основную кнопку для основного URL
    const mainExecuteBtn = document.createElement('button');
    mainExecuteBtn.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    mainExecuteBtn.textContent = t('executeRequestBtn');
    mainExecuteBtn.title = tabData.url; // Показываем URL в подсказке
    mainExecuteBtn.addEventListener('click', () => {
        executeRequest(tabId, tabData.url);
    });
    container.appendChild(mainExecuteBtn);

    // Создаем кнопки для дополнительных URL
    additionalUrls.forEach((url, index) => {
        const additionalExecuteBtn = document.createElement('button');
        additionalExecuteBtn.className = 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600';
        additionalExecuteBtn.textContent = `URL ${url}`;
        additionalExecuteBtn.title = url; // Показываем URL в подсказке
        additionalExecuteBtn.addEventListener('click', () => {
            executeRequest(tabId, url);
        });
        container.appendChild(additionalExecuteBtn);
    });
}

// === Обновление отображения результата ===
function updateResultsDisplay(tabId, result, status) {
    const resultsContainer = document.getElementById(`results-container-${tabId}`);
    if (!resultsContainer) return;

    let displayContent = '';

    if (status === 'loading') {
        displayContent = `<div class="text-blue-500">${t('resultsLoading')}</div>`; // Use loading text from translations
    } else if (result.error) {
        displayContent = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <h3 class="font-bold">${t('requestError')}</h3>
                    <p>${result.message}</p>
                    <p class="text-xs mt-1">${t('timestamp')} ${result.timestamp}</p>
                </div>
            `;
    } else {
        // Форматируем успешный результат
        displayContent = `
                <div class="mb-4">
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        <h3 class="font-bold">${t('responseStatus')}${result.statusCode} ${result.statusText}</h3>
                        <p class="text-xs">${t('timestamp')} ${result.timestamp}</p>
                    </div>

                    <h4 class="font-bold mb-2">${t('responseHeaders')}</h4>
                    <div class="overflow-x-auto max-h-40 overflow-y-auto mb-4 border rounded">
                        <table class="min-w-full divide-y divide-gray-200 text-sm">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-3 py-2 text-left">${t('emptyKeyPlaceholder')}</th>
                                    <th class="px-3 py-2 text-left">${t('emptyValuePlaceholder')}</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                ${result.headers.map(([name, value]) => `
                                    <tr>
                                        <td class="px-3 py-1 font-medium">${name}</td>
                                        <td class="px-3 py-1">${value}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold mb-2">${t('responseBody')}</h4>
                    <pre class="bg-gray-100 p-4 rounded border max-h-96 overflow-y-auto whitespace-pre-wrap font-mono text-sm">${formatResponseBody(result.body)}</pre>
                </div>
            `;
    }

    resultsContainer.innerHTML = displayContent;
}

// === Форматирование тела ответа ===
function formatResponseBody(body) {
    try {
        // Проверяем, является ли тело JSON
        const parsed = JSON.parse(body);
        return JSON.stringify(parsed, null, 2);
    } catch (e) {
        // Если не JSON, возвращаем как есть
        return body;
    }
}

// === Инициализация приложения ===
function init() {
    // Загружаем язык из настроек
    const settings = loadSettings();
    currentLanguage = settings.language || 'ru';
    document.documentElement.lang = currentLanguage;

    // Кнопка экспорта
    const exportButton = document.createElement('button');
    const btnDiv = document.createElement('div');
    exportButton.className = 'px-3 py-2 ml-2 text-gray-600 hover:bg-gray-300 rounded border border-gray-300 text-sm';
    exportButton.textContent = t('exportBtn');
    exportButton.title = t('exportTooltip');
    exportButton.addEventListener('click', exportTabs);
    btnDiv.appendChild(exportButton);
    document.querySelector('#tabsContainer').appendChild(btnDiv);

    // Кнопка импорта
    const importButton = document.createElement('button');
    importButton.className = 'px-3 py-2 ml-3 text-gray-600 hover:bg-gray-300 rounded border border-gray-300 text-sm';
    importButton.textContent = '' + t('importBtn');
    importButton.title = t('importTooltip');
    importButton.addEventListener('click', importTabs);
    btnDiv.appendChild(importButton);
    // document.querySelector('#tabsContainer').appendChild(importButton);

    // Кнопка настроек
    const settingsButton = document.createElement('button');
    settingsButton.className = 'px-3 py-2 ml-1 text-gray-600 hover:bg-gray-300 rounded border border-gray-300 text-sm';
    settingsButton.innerHTML = '⚙️'; // Gear icon
    settingsButton.title = t('settingsTooltip');
    settingsButton.addEventListener('click', showSettings);
    document.querySelector('#tabsContainer').appendChild(settingsButton);
    // Кнопка "+" для добавления таба
    // const addButton = document.createElement('button');
    // addButton.className = 'px-3 py-2 text-xl text-gray-600 hover:bg-gray-300 rounded';
    // addButton.textContent = '+';
    // addButton.title = t('addTabTooltip');
    // addButton.addEventListener('click', () => createNewTab());
    // document.querySelector('#tabsContainer').appendChild(addButton);

    // Кнопка WebSocket
    const webSocketButton = document.createElement('button');
    webSocketButton.className = 'px-3 py-2 ml-1 text-gray-600 hover:bg-gray-300 rounded border border-gray-300 text-sm';
    webSocketButton.textContent = t('startWebSocketBtn');
    webSocketButton.id = 'websocket-btn';
    webSocketButton.title = t('startWebSocketBtn');
    webSocketButton.addEventListener('click', () => {
        if (isWebSocketConnected) {
            stopWebSocket();
        } else {
            startWebSocket();
        }
    });
    document.querySelector('#tabsContainer').appendChild(webSocketButton);

    // Кнопка показа сообщений WebSocket
    const webSocketMessagesButton = document.createElement('button');
    webSocketMessagesButton.className = 'px-3 py-2 ml-1 text-gray-600 hover:bg-gray-300 rounded border border-gray-300 text-sm';
    webSocketMessagesButton.textContent = t('showWebSocketMessages');
    webSocketMessagesButton.title = t('showWebSocketMessages');
    webSocketMessagesButton.addEventListener('click', showWebSocketMessages);
    document.querySelector('#tabsContainer').appendChild(webSocketMessagesButton);

    // Кнопка "+" для добавления таба
    const addButton = document.createElement('button');
    addButton.className = 'px-3 py-2 text-xl text-gray-600 hover:bg-gray-300 rounded';
    addButton.textContent = '+';
    addButton.title = t('addTabTooltip');
    addButton.addEventListener('click', () => createNewTab());
    document.querySelector('#tabsContainer').appendChild(addButton);

    // Загрузка данных
    loadFromStorage();

    // Setup WebSocket messages panel
    setupWebSocketPanel();

    // Setup mobile navigation
    setupMobileNavigation();
}

function setupWebSocketPanel() {
    // Create WebSocket messages panel
    const wsPanel = document.createElement('div');
    wsPanel.id = 'websocket-messages-panel';
    wsPanel.className = 'fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-40 hidden';
    wsPanel.innerHTML = `
        <div class="p-4">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold">${t('webSocketMessagesTitle')}</h3>
                <button id="close-websocket-panel" class="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
            </div>
            <div id="websocket-messages-content">
                <!-- WebSocket messages will be rendered here by JavaScript -->
            </div>
        </div>
    `;

    document.body.appendChild(wsPanel);

    // Add event listener to close button
    document.getElementById('close-websocket-panel').addEventListener('click', () => {
        wsPanel.classList.add('hidden');
        // Remove padding class when panel is closed
        document.body.classList.remove('ws-panel-open');
    });

    // Initially render empty messages
    renderWebSocketMessages(document.getElementById('websocket-messages-content'));
}

// Update mobile navigation to add WebSocket button
function setupMobileNavigation() {
    const mobileTabsBtn = document.getElementById('mobileTabsBtn');
    const mobileExecuteBtn = document.getElementById('mobileExecuteBtn');
    const mobileResponseBtn = document.getElementById('mobileResponseBtn');
    const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
    const mobileResponsePopup = document.getElementById('mobileResponsePopup');
    const closeMobileResponsePopup = document.getElementById('closeMobileResponsePopup');
    const mobileResponseContent = document.getElementById('mobileResponseContent');

    // Create WebSocket button in mobile navigation (only if WebSocket URL is specified in settings)
    const settings = loadSettings();
    let mobileWebSocketBtn = document.getElementById('mobileWebSocketBtn');

    if (settings.webSocketUrl && settings.webSocketUrl.trim() !== '' && !mobileWebSocketBtn) {
        mobileWebSocketBtn = document.createElement('button');
        mobileWebSocketBtn.className = 'mobile-nav-btn';
        mobileWebSocketBtn.id = 'mobileWebSocketBtn';
        mobileWebSocketBtn.title = t('showWebSocketMessages');
        mobileWebSocketBtn.innerHTML = `<i>📡</i><span>WebSocket</span>`;

        // Insert the WebSocket button before the settings button
        const mobileNav = document.getElementById('mobileNav');
        mobileNav.insertBefore(mobileWebSocketBtn, document.getElementById('mobileSettingsBtn'));

        // Initially hide the button if WebSocket is not connected
        mobileWebSocketBtn.style.display = isWebSocketConnected ? 'flex' : 'none';

        // Add event listener for the WebSocket button
        mobileWebSocketBtn.addEventListener('click', () => {
            // Highlight active button
            document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.classList.remove('active'));
            mobileWebSocketBtn.classList.add('active');

            // Show WebSocket messages popup
            showWebSocketMessages();
        });
    } else if (mobileWebSocketBtn) {
        // If button exists but WebSocket is not connected, hide it
        mobileWebSocketBtn.style.display = isWebSocketConnected ? 'flex' : 'none';
    }

    // Tabs button - switch between tabs
    mobileTabsBtn.addEventListener('click', () => {
        // Highlight active button
        document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.classList.remove('active'));
        mobileTabsBtn.classList.add('active');

        // Show tabs container (for mobile we might want to show a tab selector)
        showTabSelector();
    });

    // Execute button - execute the current request
    mobileExecuteBtn.addEventListener('click', () => {
        // Highlight active button
        document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.classList.remove('active'));
        mobileExecuteBtn.classList.add('active');

        // Execute request for current tab
        if (currentTabId) {
            const tabData = tabs.find(t => t.id === currentTabId);
            if (tabData) {
                executeRequest(currentTabId, tabData.url);
            }
        }
    });

    // Response button - show response in popup
    mobileResponseBtn.addEventListener('click', () => {
        // Highlight active button
        document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.classList.remove('active'));
        mobileResponseBtn.classList.add('active');

        // Show response popup
        if (currentTabId) {
            const tabData = tabs.find(t => t.id === currentTabId);
            if (tabData && tabData.lastResult) {
                mobileResponseContent.innerHTML = formatMobileResponse(tabData.lastResult);
                mobileResponsePopup.style.display = 'block';
            } else {
                mobileResponseContent.innerHTML = '<p>No response available. Execute a request first.</p>';
                mobileResponsePopup.style.display = 'block';
            }
        }
    });

    // Settings button - show settings
    mobileSettingsBtn.addEventListener('click', () => {
        // Highlight active button
        document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.classList.remove('active'));
        mobileSettingsBtn.classList.add('active');

        // Show settings modal
        showSettings();
    });

    // Close response popup
    closeMobileResponsePopup.addEventListener('click', () => {
        mobileResponsePopup.style.display = 'none';
    });

    // Also close popup when clicking outside of it
    mobileResponsePopup.addEventListener('click', (e) => {
        if (e.target === mobileResponsePopup) {
            mobileResponsePopup.style.display = 'none';
        }
    });

    // Initialize active state for mobile nav buttons
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.classList.remove('active'));
    mobileTabsBtn.classList.add('active');
}

// Запуск
init();

// Add beforeunload event to warn when leaving page with unsaved changes
window.addEventListener('beforeunload', function (e) {
    // Check if there are any tabs (meaning there's data that might be considered "unsaved" in a temporary sense)
    if (tabs && tabs.length > 0) {
        const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
        e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
        return confirmationMessage;              // Gecko, WebKit, Chrome <34
    }
});


// Function to show tab selector on mobile
function showTabSelector() {
    if (showTa) return;
    showTa = true
    // This could be a dropdown or modal with available tabs
    const tabNames = tabs.map(tab => tab.name);

    // Create a simple modal to select tabs
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
            <div class="tabs-modal bg-white p-6 rounded-lg shadow-lg w-80 max-w-full mx-4 modal-content">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">Select Tab</h2>
                    <button id="close-tab-selector" class="text-gray-500 hover:text-gray-700">&times;</button>
                </div>
                <div id="tab-list" class="space-y-2 max-h-96 overflow-y-auto">
                    ${tabs.map(tab => `
                        <div class="p-2 border border-gray-200 rounded hover:bg-gray-100 cursor-pointer flex justify-between items-center tab-option" data-id="${tab.id}">
                            <span class="tab-name">${tab.name}</span>
                            <div class="edit-tab flex space-x-2">
                                <button class="rename-tab-btn text-blue-500 hover:text-blue-700 text-sm" title="${t('renameTab')}">✏️</button>
                                <button class="delete-tab-btn text-red-500 hover:text-red-700 text-sm" title="${t('deleteTab')}">×</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-4 flex justify-end space-x-2">
                    <button id="add-new-tab-mobile" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">+ New Tab</button>
                </div>
            </div>
        `;

    document.body.appendChild(modal);

    // Add event listeners to tab options
    document.querySelectorAll('.tab-option').forEach(option => {
        option.addEventListener('click', (e) => {
            // If the click was on the rename or delete button, don't activate the tab
            // console.log(e.target.tagName)
            // console.log(e.target)
            if (
                e.target.classList.contains('rename-tab-btn') ||
                e.target.classList.contains('delete-tab-btn') ||
                e.target.classList.contains('edit-tab') ||
                e.target.tagName === 'INPUT'
            ) {
                return;
            }

            const tabId = parseInt(option.getAttribute('data-id'));
            activateTab(tabId);

            // Update mobile nav active state
            document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById('mobileTabsBtn').classList.add('active');

            closeModal(modal)
        });
    });

    // Add event listeners for rename buttons
    document.querySelectorAll('.rename-tab-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent tab activation
            const tabOption = btn.closest('.tab-option');
            const tabId = parseInt(tabOption.getAttribute('data-id'));
            const tabNameSpan = tabOption.querySelector('.tab-name');
            const currentName = tabNameSpan.textContent;

            // Create input field to edit the name
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentName;
            input.className = 'flex-1 px-2 py-1 border border-gray-300 rounded text-sm';

            // Replace the name span with the input
            tabNameSpan.replaceWith(input);
            input.focus();
            input.select();

            // Function to save the name and revert to span
            const saveName = () => {
                const newName = input.value.trim() || t('unnamed');
                updateTabData(tabId, {name: newName});

                // Update the tab UI as well
                const tabInput = document.querySelector(`.tab[data-id="${tabId}"] .tab-input`);
                if (tabInput) {
                    tabInput.value = newName;
                }

                // Replace input with updated span
                const newSpan = document.createElement('span');
                newSpan.className = 'tab-name';
                newSpan.textContent = newName;
                input.replaceWith(newSpan);

                // Update the tab in the UI immediately
                renderTabContentFresh(tabId, true);
            };

            // Save when Enter is pressed or input loses focus
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    saveName();
                }
            });

            input.addEventListener('blur', saveName);
        });
    });

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-tab-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent tab activation
            const tabOption = btn.closest('.tab-option');
            const tabId = parseInt(tabOption.getAttribute('data-id'));

            if (tabs.length <= 1) {
                showNotification('Cannot delete the last tab', 'warning');
                return;
            }

            if (confirm(t('confirmDeleteTab'))) {
                removeTab(tabId);
                // Remove the tab option from the modal UI
                tabOption.remove();
            }
        });
    });

    // Close button
    document.getElementById('close-tab-selector').addEventListener('click', () => {
        closeModal(modal)
    });

    // Add new tab button
    document.getElementById('add-new-tab-mobile').addEventListener('click', () => {
        createNewTab();
        closeModal(modal)
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal)
        }
    });
}

// === WebSocket функциональность ===
function startWebSocket() {
    if (isWebSocketConnected && webSocket) {
        showNotification(t('webSocketConnected'), 'info');
        return;
    }

    const settings = loadSettings();
    const webSocketUrl = settings.webSocketUrl;

    if (!webSocketUrl) {
        showNotification('Please set WebSocket URL in settings first', 'warning');
        return;
    }

    try {
        webSocket = new WebSocket(webSocketUrl);

        webSocket.onopen = function (event) {
            console.log('WebSocket connected');
            isWebSocketConnected = true;
            updateWebSocketButton();
            showHideMobileWebSocketButton(true); // Show the mobile WebSocket button when connected
            webSocketMessages.push({
                type: 'info',
                message: t('webSocketConnected'),
                timestamp: new Date().toLocaleString()
            });
            updateWebSocketMessagesDisplay();

            // Update mobile navigation to show WebSocket button
            setupMobileNavigation();

            // Show notification for successful connection
            showNotification(t('webSocketConnected'), 'success');
        };

        webSocket.onmessage = function (event) {
            console.log('WebSocket message received:', event.data);

            try {
                // Try to parse the message as JSON to see if it's a command response
                const messageData = JSON.parse(event.data);

                // Check if it's a command response
                if (messageData.command || messageData.type === 'command_response' || messageData.isCommandResponse) {
                    webSocketMessages.push({
                        type: 'command_response',
                        message: `Command Response: ${JSON.stringify(messageData)}`,
                        timestamp: new Date().toLocaleString(),
                        data: messageData
                    });
                } else {
                    // Regular message
                    webSocketMessages.push({
                        type: 'message',
                        message: event.data,
                        timestamp: new Date().toLocaleString()
                    });
                }
            } catch (e) {
                // If parsing fails, treat as regular message
                webSocketMessages.push({
                    type: 'message',
                    message: event.data,
                    timestamp: new Date().toLocaleString()
                });
            }

            updateWebSocketMessagesDisplay();
        };

        webSocket.onerror = function (error) {
            console.error('WebSocket error:', error);
            webSocketMessages.push({
                type: 'error',
                message: t('webSocketConnectionError') + ': ' + error.message,
                timestamp: new Date().toLocaleString()
            });
            updateWebSocketMessagesDisplay();

            // Show notification for WebSocket error
            showNotification(t('webSocketConnectionError') + ': ' + error.message, 'error');
        };

        webSocket.onclose = function (event) {
            console.log('WebSocket closed:', event.code, event.reason);
            isWebSocketConnected = false;
            updateWebSocketButton();
            showHideMobileWebSocketButton(false); // Hide the mobile WebSocket button when disconnected
            webSocketMessages.push({
                type: 'info',
                message: t('webSocketDisconnected'),
                timestamp: new Date().toLocaleString()
            });
            updateWebSocketMessagesDisplay();

            // Update mobile navigation to hide WebSocket button
            setupMobileNavigation();

            // Show notification for disconnection
            showNotification(t('webSocketDisconnected'), 'info');
        };
    } catch (error) {
        console.error('Failed to create WebSocket:', error);
        webSocketMessages.push({
            type: 'error',
            message: t('webSocketConnectionError') + ': ' + error.message,
            timestamp: new Date().toLocaleString()
        });
        updateWebSocketMessagesDisplay();

        // Show notification for WebSocket connection failure
        showNotification(t('webSocketConnectionError') + ': ' + error.message, 'error');
    }
}

function stopWebSocket() {
    if (webSocket) {
        webSocket.close();
        webSocket = null;
        isWebSocketConnected = false;
        updateWebSocketButton();
        showHideMobileWebSocketButton(false); // Hide the mobile WebSocket button when stopped

        // Update mobile navigation to hide WebSocket button
        setupMobileNavigation();

        // Show notification for manual disconnection
        showNotification(t('webSocketDisconnected'), 'info');
    }
}

// Function to show/hide the mobile WebSocket button based on connection status
function showHideMobileWebSocketButton(show) {
    const mobileWebSocketBtn = document.getElementById('mobileWebSocketBtn');
    if (mobileWebSocketBtn) {
        if (show) {
            mobileWebSocketBtn.style.display = 'flex';
        } else {
            mobileWebSocketBtn.style.display = 'none';
        }
    }
}

function updateWebSocketButton() {
    // Update main WebSocket button
    const wsButton = document.getElementById('websocket-btn');
    if (wsButton) {
        wsButton.textContent = isWebSocketConnected ? t('stopWebSocketBtn') : t('startWebSocketBtn');
        wsButton.className = isWebSocketConnected
            ? 'px-3 py-2 ml-1 text-gray-600 hover:bg-gray-300 rounded border border-gray-300 text-sm bg-red-100 hover:bg-red-200'
            : 'px-3 py-2 ml-1 text-gray-600 hover:bg-gray-300 rounded border border-gray-300 text-sm';
    }

    // Update WebSocket buttons in settings modal if it's open
    const startWsBtn = document.getElementById('start-websocket-btn');
    const stopWsBtn = document.getElementById('stop-websocket-btn');
    if (startWsBtn && stopWsBtn) {
        if (isWebSocketConnected) {
            startWsBtn.style.display = 'none';
            stopWsBtn.style.display = 'flex';
        } else {
            startWsBtn.style.display = 'flex';
            stopWsBtn.style.display = 'none';
        }
    }
}

function updateWebSocketMessagesDisplay() {
    // Update the WebSocket messages panel if it exists
    const wsMessagesPanel = document.getElementById('websocket-messages-panel');
    if (wsMessagesPanel && !wsMessagesPanel.classList.contains('hidden')) {
        renderWebSocketMessages(document.getElementById('websocket-messages-content'));
    }

    // Update mobile popup if it's open
    const mobileWsPopup = document.getElementById('mobileWebSocketPopup');
    if (mobileWsPopup && mobileWsPopup.style.display !== 'none') {
        const mobileWsContent = document.getElementById('mobileWebSocketContent');
        if (mobileWsContent) {
            mobileWsContent.innerHTML = formatWebSocketMessagesForMobile();
        }
    }

    // Update the WebSocket messages button to indicate if there are messages
    const wsMessagesBtn = document.querySelector('#tabsContainer button[title="' + t('showWebSocketMessages') + '"]');
    if (wsMessagesBtn && webSocketMessages.length > 0) {
        // Add a small indicator that there are messages
        let indicator = wsMessagesBtn.querySelector('.ws-indicator');
        if (!indicator) {
            indicator = document.createElement('span');
            indicator.className = 'ws-indicator absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center';
            indicator.textContent = Math.min(webSocketMessages.length, 99); // Cap at 99
            wsMessagesBtn.style.position = 'relative';
            wsMessagesBtn.appendChild(indicator);
        } else {
            indicator.textContent = Math.min(webSocketMessages.length, 99);
        }
    } else {
        // Remove indicator if no messages
        const indicator = document.querySelector('#tabsContainer .ws-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
}

function renderWebSocketMessages(container) {
    container.innerHTML = `
        <div class="p-4">
            <div id="websocket-messages-list" class="space-y-2 max-h-96 overflow-y-auto">
                ${webSocketMessages.map(msg => {
        let className = 'p-2 rounded text-sm';
        if (msg.type === 'error') className += ' bg-red-100 border border-red-300';
        else if (msg.type === 'info') className += ' bg-blue-100 border border-blue-300';
        else if (msg.type === 'command_response') className += ' bg-green-100 border border-green-300';
        else className += ' bg-gray-100 border border-gray-300';

        return `
                        <div class="${className}">
                            <div class="text-xs text-gray-500">${msg.timestamp}</div>
                            <div>${msg.message}</div>
                        </div>
                    `;
    }).join('')}
            </div>
            <div class="mt-3">
                <button id="clear-websocket-messages" class="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">
                    Clear Messages
                </button>
            </div>
        </div>
    `;

    // Add event listener for clear button
    const clearBtn = document.getElementById('clear-websocket-messages');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            webSocketMessages = [];
            updateWebSocketMessagesDisplay();
        });
    }
}

function formatWebSocketMessagesForMobile() {
    return `
        <div class="">
            <div id="mobile-websocket-messages-list" class="space-y-2 max-h-96 overflow-y-auto">
                ${webSocketMessages.map(msg => {
        let className = 'p-2 rounded text-sm mb-2';
        if (msg.type === 'error') className += ' bg-red-100 border border-red-300';
        else if (msg.type === 'info') className += ' bg-blue-100 border border-blue-300';
        else if (msg.type === 'command_response') className += ' bg-green-100 border border-green-300';
        else className += ' bg-gray-100 border border-gray-300';

        return `
                        <div class="${className}">
                            <div class="text-xs text-gray-500">${msg.timestamp}</div>
                            <div>${msg.message}</div>
                        </div>
                    `;
    }).join('')}
            </div>
            <div class="mt-3">
                <button id="clear-mobile-websocket-messages" class="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300 w-full">
                    Clear Messages
                </button>
            </div>
        </div>
    `;
}

function showWebSocketMessages() {
    if (showSe) return; // Prevent opening if settings modal is open

    // Check if we're on mobile view
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // On mobile, show as popup modal
        showSe = true;
        // Create mobile WebSocket messages popup
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.id = 'mobileWebSocketPopup';

        const content = document.createElement('div');
        content.className = 'bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto modal-content';
        content.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold">${t('webSocketMessagesTitle')}</h2>
                <button id="close-websocket-popup" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>
            <div id="mobileWebSocketContent">
                ${formatWebSocketMessagesForMobile()}
            </div>
        `;

        modal.appendChild(content);
        document.body.appendChild(modal);

        // Close button
        document.getElementById('close-websocket-popup').addEventListener('click', () => {
            document.body.removeChild(modal);
            showSe = false;
        });

        // Clear button for mobile
        const clearBtn = document.getElementById('clear-mobile-websocket-messages');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                webSocketMessages = [];
                updateWebSocketMessagesDisplay();
            });
        }

        // Close when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                showSe = false;
            }
        });

        // Handle ESC key
        function handleEscKey(event) {
            if (event.key === 'Escape') {
                document.body.removeChild(modal);
                showSe = false;
                document.removeEventListener('keydown', handleEscKey);
            }
        }

        document.addEventListener('keydown', handleEscKey);
    } else {
        // On desktop, toggle the bottom panel
        const wsPanel = document.getElementById('websocket-messages-panel');
        if (wsPanel) {
            if (wsPanel.classList.contains('hidden')) {
                wsPanel.classList.remove('hidden');
                // Add padding class to main content to prevent content from being covered
                document.body.classList.add('ws-panel-open');
                // Update the content to show latest messages
                renderWebSocketMessages(document.getElementById('websocket-messages-content'));
            } else {
                wsPanel.classList.add('hidden');
                // Remove padding class when panel is hidden
                document.body.classList.remove('ws-panel-open');
            }
        }
    }
}

// Notification functions
function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notificationId = 'notif-' + Date.now() + '-' + Math.floor(Math.random() * 10000);

    const notification = document.createElement('div');
    notification.id = notificationId;
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">${message}</div>
        <button class="notification-close" onclick="closeNotification('${notificationId}')">&times;</button>
    `;

    container.appendChild(notification);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        closeNotification(notificationId);
    }, 5000);
}

function closeNotification(notificationId) {
    const notification = document.getElementById(notificationId);
    if (notification) {
        // Add fade-out animation
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';

        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

function formatMobileResponse(result) {
    if (result.error) {
        return `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <h3 class="font-bold">${t('requestError')}</h3>
                    <p>${result.message}</p>
                    <p class="text-xs mt-1">${t('timestamp')} ${result.timestamp}</p>
                </div>
            `;
    } else {
        return `
                <div class="mb-4">
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        <h3 class="font-bold">${t('responseStatus')}${result.statusCode} ${result.statusText}</h3>
                        <p class="text-xs">${t('timestamp')} ${result.timestamp}</p>
                    </div>

                    <h4 class="font-bold mb-2">${t('responseHeaders')}</h4>
                    <div class="overflow-x-auto max-h-40 overflow-y-auto mb-4 border rounded">
                        <table class="min-w-full divide-y divide-gray-200 text-sm">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-3 py-2 text-left">${t('emptyKeyPlaceholder')}</th>
                                    <th class="px-3 py-2 text-left">${t('emptyValuePlaceholder')}</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                ${result.headers.map(([name, value]) => `
                                    <tr>
                                        <td class="px-3 py-1 font-medium">${name}</td>
                                        <td class="px-3 py-1">${value}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold mb-2">${t('responseBody')}</h4>
                    <pre class="bg-gray-100 p-4 rounded border max-h-96 overflow-y-auto whitespace-pre-wrap font-mono text-sm">${formatResponseBody(result.body)}</pre>
                </div>
            `;
    }
}

