// 当文档加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    // 侧边栏菜单项点击事件
    const navItems = document.querySelectorAll('.sidebar-nav li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有活动状态
            navItems.forEach(i => i.classList.remove('active'));
            // 添加活动状态到当前点击的项目
            this.classList.add('active');
        });
    });

    // 响应式侧边栏切换
    const toggleSidebar = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    
    if (toggleSidebar && sidebar) {
        toggleSidebar.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }
    
    // 注意：移除了滚动监听代码，顶部栏现在始终固定在顶部
}); 