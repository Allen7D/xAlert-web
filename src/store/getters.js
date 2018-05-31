const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  totalAssets: state => state.app.records['gushenxing-eth0'].totalAssets,
  assets: state => state.app.records['gushenxing-eth0'],
  security: state => state.app.security,
  totalFlowByteIn: state => state.app.records['gushenxing-eth0'].totalFlowByteIn,
  securityEvent: state => state.app.security.summaryTotal
}
export default getters
