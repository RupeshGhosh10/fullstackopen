const listHelper = require('../utils/list_helper');

const blogs = [
  {
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  },
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  },
  {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  },
  {
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10
  },
  {
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0
  },
  {
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2
  }
];

describe('dummy', () => {
  test('dummy returns one', () => {
    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });
});

describe('totalLikes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(36);
  });
});

describe('favoriteBlog', () => {
  const exprectedBlog = {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  };

  test('return most liked blog', () => {
    const result = listHelper.favoriteBlog(blogs);
    expect(result).toEqual(exprectedBlog);
  });
});

describe('mostBlogs', () => {
  const expectedAuthor = {
    author: 'Robert C. Martin',
    blogsCount: 3
  };

  test('return author with most blogs', () => {
    const result = listHelper.mostBlogs(blogs);
    expect(result).toEqual(expectedAuthor);
  });
});

describe('mostLikes', () => {
  const expectedAuthor = {
    author: 'Edsger W. Dijkstra',
    likesCount: 17
  };

  test('return author with most likes', () => {
    const result = listHelper.mostLikes(blogs);
    expect(result).toEqual(expectedAuthor);
  });
});
