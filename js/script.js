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

    // 侧边栏伸缩功能
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    if (sidebarToggle && sidebar && content) {
        sidebarToggle.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                // 移动端逻辑
                sidebar.classList.toggle('show');
            } else {
                // PC端逻辑
                sidebar.classList.toggle('collapsed');
                content.classList.toggle('expanded');
            }
            
            // 更新按钮提示文字
            if (sidebar.classList.contains('collapsed') || !sidebar.classList.contains('show')) {
                sidebarToggle.setAttribute('title', '展开侧边栏');
            } else {
                sidebarToggle.setAttribute('title', '收起侧边栏');
            }
        });
    }

    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('show');
        }
    });
}); 