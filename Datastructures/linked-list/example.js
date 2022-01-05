var LinkedList = require('./linked-list')

/**Example*/
let BookTitles = new LinkedList();
BookTitles.insert("Introduction to Algorithm");
BookTitles.insert("Introduction to PHP and Data structures");
BookTitles.insert("Programming Intelligence");
BookTitles.insertBefore("New Trending Book","Introduction to PHP and Data structures")
BookTitles.deleteFirst()


//console.log(BookTitles)
BookTitles.display()