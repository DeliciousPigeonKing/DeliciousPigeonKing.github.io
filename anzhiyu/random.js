var posts=["2023/05/02/PigeonKingの博客升级！/","2023/05/02/arcaea双星纪念/","2023/04/30/hello-world/","2023/05/02/中考加油/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};