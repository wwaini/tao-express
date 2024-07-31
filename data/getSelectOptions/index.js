module.exports = query = (pageIndex, pageSize) => {
  const res = []
  for (let i = 1; i < 100; i++) {
    res.push({ name: `悟空${i}`, index: `第${i}次` })
  }
  return res.splice((pageIndex - 1) * pageSize, pageSize)
}