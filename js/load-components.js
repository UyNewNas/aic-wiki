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
        'operator-detail.html': '干员详情'
    };
    
    const titleElement = document.querySelector('header h2');
    if (titleElement) {
        titleElement.textContent = pageTitles[currentPage] || '页面标题';
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
});