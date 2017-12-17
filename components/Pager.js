export default ({page, onClick}) => (
  <div>
    <hr />
    {page > 1 && <span onClick={() => onClick(page - 1)}>{'< '}</span>}
    {page}
    <span onClick={() => onClick(page + 1)}>{' >'}</span>
    <hr />
  </div>
)