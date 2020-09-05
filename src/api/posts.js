const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// { id, title, body }
const posts = [
  { id: 1, title: "리덕스 미들웨어 쉬워", body: "직접 만들어봐야지" },
  { id: 2, title: "간만에 코드 치니까 신기해", body: "열심히 해야지" },
  { id: 3, title: "야근은 필수다", body: "신입에게 쉬는날은 없다" },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostsById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
