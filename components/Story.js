const noMargin = {margin: 0}

export default ({ value }) => (
  <div style={{marginBottom: 20}}>
    <h3 style={noMargin}>{value.title}</h3>
    <h4 style={noMargin}>{value.user}</h4>
    <small style={noMargin}>{value.domain}</small>
  </div>
)
