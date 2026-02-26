// 加载公共组件
function loadComponent(containerId, htmlContent) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = htmlContent;
    }
}

// 根据当前页面高亮对应的菜单项
function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('sidebar-active');
            link.classList.remove('hover:bg-gray-100');
        } else {
            link.classList.remove('sidebar-active');
            link.classList.add('hover:bg-gray-100');
        }
    });
}

// 绑定侧边栏事件
function bindSidebarEvents() {
    // 侧边栏切换
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            const mobileSidebar = document.getElementById('mobile-sidebar');
            const mobileSidebarContent = document.getElementById('mobile-sidebar-content');
            
            mobileSidebar.classList.remove('hidden');
            setTimeout(() => {
                mobileSidebarContent.classList.remove('-translate-x-full');
            }, 10);
        });
    }
    
    // 关闭侧边栏
    const closeSidebar = document.getElementById('close-sidebar');
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            const mobileSidebar = document.getElementById('mobile-sidebar');
            const mobileSidebarContent = document.getElementById('mobile-sidebar-content');
            
            mobileSidebarContent.classList.add('-translate-x-full');
            setTimeout(() => {
                mobileSidebar.classList.add('hidden');
            }, 300);
        });
    }
    
    // 点击遮罩层关闭侧边栏
    const mobileSidebar = document.getElementById('mobile-sidebar');
    if (mobileSidebar) {
        mobileSidebar.addEventListener('click', function(e) {
            if (e.target === this) {
                const mobileSidebarContent = document.getElementById('mobile-sidebar-content');
                
                mobileSidebarContent.classList.add('-translate-x-full');
                setTimeout(() => {
                    this.classList.add('hidden');
                }, 300);
            }
        });
    }
}

// 设置页面标题
function setPageTitle() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageTitles = {
        'index.html': '首页',
        'operators.html': '干员',
        'weapons.html': '武器',
        'equipment.html': '装备',
        'enemies.html': '敌人',
        'story.html': '剧情',
        'calculator.html': '计算器',
        'help.html': '帮助中心',
        'contact.html': '联系我们',
        'copyright.html': '版权声明',
        'operator-detail.html': '干员详情',
        'weapon-detail.html': '武器详情'
    };
    
    const titleElement = document.querySelector('header h2');
    if (titleElement) {
        titleElement.textContent = pageTitles[currentPage] || '页面标题';
    }
}



// 应用主题样式的函数
function applyThemeStyles() {
    // 检查当前主题
    const currentTheme = localStorage.getItem('theme');
    const isDarkMode = currentTheme === 'dark';
    
    // 直接设置body元素的样式
    const body = document.body;
    if (isDarkMode) {
        body.style.backgroundColor = '#111827';
        body.style.color = '#e5e7eb';
    } else {
        body.style.backgroundColor = '';
        body.style.color = '';
    }
    
    // 设置main元素的样式
    const main = document.querySelector('main');
    if (main) {
        if (isDarkMode) {
            main.style.backgroundColor = '#111827';
        } else {
            main.style.backgroundColor = '';
        }
    }
    
    // 设置header元素的样式
    const header = document.querySelector('header');
    if (header) {
        if (isDarkMode) {
            header.style.backgroundColor = '#1f2937';
        } else {
            header.style.backgroundColor = '';
        }
    }
    
    // 设置sidebar元素的样式
    const sidebar = document.querySelector('aside');
    if (sidebar) {
        if (isDarkMode) {
            sidebar.style.backgroundColor = '#1f2937';
        } else {
            sidebar.style.backgroundColor = '';
        }
    }
    
    // 设置卡片的样式
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        if (isDarkMode) {
            card.style.backgroundColor = '#1f2937';
        } else {
            card.style.backgroundColor = '';
        }
    });
    
    console.log(`Theme styles applied! Current theme: ${isDarkMode ? 'dark' : 'light'}`);
}

// 初始化主题切换
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        body.classList.add('dark-mode');
    }
    
    // 主题切换按钮点击事件
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            body.classList.toggle('dark-mode');
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
            // 应用主题样式
            applyThemeStyles();
        });
    }
}

// 加载所有组件
document.addEventListener('DOMContentLoaded', () => {
    // 加载组件
    loadComponent('sidebar-container', sidebarHTML);
    loadComponent('header-container', headerHTML);
    loadComponent('mobile-sidebar-container', mobileSidebarHTML);
    
    // 设置页面标题
    setPageTitle();
    
    // 高亮当前菜单项
    setActiveMenuItem();
    
    // 绑定侧边栏事件
    bindSidebarEvents();
    
    // 初始化主题切换
    initThemeToggle();
    
    // 应用当前主题样式
    setTimeout(() => {
        console.log('Applying current theme styles...');
        applyThemeStyles();
    }, 500);
});