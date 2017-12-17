import Story from "./Story"

export default ({stories = []}) => (
  <div>
    {stories.map((story, key) => (
      <Story key={key} value={story} />
    ))}
  </div>
)