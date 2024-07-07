layui.use(['element'], function(){
    var element = layui.element;
    element.init();
});

document.addEventListener('DOMContentLoaded', function() {
    function loadContent(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('contentLoader').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    document.querySelectorAll('.layui-nav .layui-nav-item a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            loadContent(url);
        });
    });

    loadContent('home.html');
});