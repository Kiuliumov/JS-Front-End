function comments(array){
    const users = [];
    const articles = {};

    for (const string of array) {
        if(string.includes('user')){
            const username = string.slice(5); 
            users.push(username); 

        } else if(string.includes('article')){
            const articleName = string.slice(8);;
            articles[articleName] = [];
        }  else {
            const [username, ...rest] = string.split(' posts on ');
            const [articleName, ...commentInfo] = rest.join(' posts on ').split(': ');
            const [commentTitle, commentContent] = commentInfo.join(': ').split(', ')
            if(users.includes(username) && articleName in articles){
                articles[articleName].push({username: username, commentTitle: commentTitle, commentContent: commentContent});
            } 
        }
    }


    const sortedArticles = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);

    sortedArticles.forEach(([_, comments]) => {
        comments.sort((a, b) => a.username.localeCompare(b.username));
    });

    sortedArticles.forEach(([articleName, comments]) => {
        console.log(`Comments on ${articleName}`);
        comments.forEach(comment => {
            console.log(`--- From user ${comment.username}: ${comment.commentTitle} - ${comment.commentContent}`);
        });
    });
}

comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby','article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, Ido really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])