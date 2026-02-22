// 组件HTML字符串
const sidebarHTML = `
<aside class="w-64 bg-white shadow-md hidden md:block">
    <!-- 品牌区域 -->
    <div class="p-4 border-b">
        <div class="flex items-center">
            <img src="icon.png" alt="AICwiki" class="w-8 h-8 mr-2">
            <div>
                <h1 class="text-xl font-bold text-primary">AICwiki</h1>
                <p class="text-xs text-gray-500">明日方舟：终末地 Wiki</p>
            </div>
        </div>
    </div>
    
    <!-- 导航菜单 -->
    <nav class="p-4">
        <ul>
            <li class="mb-1">
                <a href="index.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                    <img src="icon.png" alt="首页" class="w-5 h-5 mr-3">
                    <span>首页</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="operators.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                    <img src="./images/1d686e39ecbd7064a8ff0671dca15d8d.webp" alt="干员" class="w-5 h-5 mr-3">
                    <span>干员</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="weapons.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                    <img src="./images/3a11bb7df6487dd4e31b45eaa6688cfd.webp" alt="武器" class="w-5 h-5 mr-3">
                    <span>武器</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="equipment.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                    <img src="./images/6da788143f34d24cc6a59e262ca9f42a.webp" alt="装备" class="w-5 h-5 mr-3">
                    <span>装备</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="enemies.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                    <img src="./images/30ff7119fb41b7673ae036087893dd1a.webp" alt="敌人" class="w-5 h-5 mr-3">
                    <span>敌人</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="story.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                    <img src="./images/75e5264b1baad26ca903997285ca0e6d.webp" alt="剧情" class="w-5 h-5 mr-3">
                    <span>剧情</span>
                </a>
            </li>
            <li class="mb-1">
                <a href="calculator.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                    <img src="./images/a15babac33453fdf6bea6158ec933081.webp" alt="计算器" class="w-5 h-5 mr-3">
                    <span>计算器</span>
                </a>
            </li>
        </ul>
        
        <div class="mt-8 pt-4 border-t">
            <h3 class="text-xs uppercase text-gray-500 font-semibold mb-2">快捷链接</h3>
            <ul>
                <li class="mb-1">
                    <a href="help.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <i class="fa fa-question-circle sidebar-icon"></i>
                        <span>帮助中心</span>
                    </a>
                </li>
                <li class="mb-1">
                    <a href="contact.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <i class="fa fa-envelope sidebar-icon"></i>
                        <span>联系我们</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</aside>
`;

const headerHTML = `
<header class="bg-white shadow-sm">
    <div class="flex items-center justify-between p-4">
        <div class="flex items-center">
            <button id="sidebar-toggle" class="md:hidden mr-4 text-gray-500">
                <i class="fa fa-bars"></i>
            </button>
            <h2 class="text-lg font-semibold">页面标题</h2>
        </div>
        <div class="flex items-center">
            <div class="relative mr-4">
                <input type="text" placeholder="搜索..." class="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <i class="fa fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
            <div class="relative">
                <button class="flex items-center text-gray-700">
                    <img src="" alt="用户头像" class="w-8 h-8 rounded-full mr-2">
                    <span>管理员</span>
                    <i class="fa fa-caret-down ml-2"></i>
                </button>
            </div>
        </div>
    </div>
</header>
`;

const mobileSidebarHTML = `
<div id="mobile-sidebar" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 hidden">
    <div class="w-64 h-full bg-white shadow-lg transform -translate-x-full transition-transform duration-300" id="mobile-sidebar-content">
        <!-- 品牌区域 -->
        <div class="p-4 border-b flex justify-between items-center">
            <div class="flex items-center">
                <img src="icon.png" alt="AICwiki" class="w-8 h-8 mr-2">
                <div>
                    <h1 class="text-xl font-bold text-primary">AICwiki</h1>
                    <p class="text-xs text-gray-500">明日方舟：终末地 Wiki</p>
                </div>
            </div>
            <button id="close-sidebar" class="text-gray-500">
                <i class="fa fa-times"></i>
            </button>
        </div>
        
        <!-- 导航菜单 -->
        <nav class="p-4">
            <ul>
                <li class="mb-1">
                    <a href="index.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <img src="icon.png" alt="首页" class="w-5 h-5 mr-3">
                        <span>首页</span>
                    </a>
                </li>
                <li class="mb-1">
                    <a href="operators.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <img src="./images/1d686e39ecbd7064a8ff0671dca15d8d.webp" alt="干员" class="w-5 h-5 mr-3">
                        <span>干员</span>
                    </a>
                </li>
                <li class="mb-1">
                    <a href="weapons.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <img src="./images/3a11bb7df6487dd4e31b45eaa6688cfd.webp" alt="武器" class="w-5 h-5 mr-3">
                        <span>武器</span>
                    </a>
                </li>
                <li class="mb-1">
                    <a href="equipment.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <img src="./images/6da788143f34d24cc6a59e262ca9f42a.webp" alt="装备" class="w-5 h-5 mr-3">
                        <span>装备</span>
                    </a>
                </li>
                <li class="mb-1">
                    <a href="enemies.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <img src="./images/30ff7119fb41b7673ae036087893dd1a.webp" alt="敌人" class="w-5 h-5 mr-3">
                        <span>敌人</span>
                    </a>
                </li>
                <li class="mb-1">
                    <a href="story.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <img src="./images/75e5264b1baad26ca903997285ca0e6d.webp" alt="剧情" class="w-5 h-5 mr-3">
                        <span>剧情</span>
                    </a>
                </li>
                <li class="mb-1">
                    <a href="calculator.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                        <img src="./images/a15babac33453fdf6bea6158ec933081.webp" alt="计算器" class="w-5 h-5 mr-3">
                        <span>计算器</span>
                    </a>
                </li>
            </ul>
            
            <div class="mt-8 pt-4 border-t">
                <h3 class="text-xs uppercase text-gray-500 font-semibold mb-2">快捷链接</h3>
                <ul>
                    <li class="mb-1">
                        <a href="help.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                            <i class="fa fa-question-circle sidebar-icon"></i>
                            <span>帮助中心</span>
                        </a>
                    </li>
                    <li class="mb-1">
                        <a href="contact.html" class="flex items-center p-2 rounded-md hover:bg-gray-100">
                            <i class="fa fa-envelope sidebar-icon"></i>
                            <span>联系我们</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
`;