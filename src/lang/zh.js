export default {
  base: {
    '*': '任意',
    '@timestamp': '时间',
    'IN_SRC_MAC': '源MAC',
    'OUT_DST_MAC': '目标MAC',
    'IN_SRC_OS': '源操作系统',
    'OUT_DST_OS': '目标操作系统',
    'IPV4_SRC_ADDR': '源IP',
    'IPV4_DST_ADDR': '目标IP',
    'L4_SRC_PORT': '源端口',
    'L4_DST_PORT': '目标端口',
    'PROTOCOL': 'L4协议',
    'L7_PROTO': 'L7协议',
    'L7_PROTO_NAME': 'L7协议名',
    'TCP_FLAGS': 'TCP FLAGS',
    'IN_PKTS': '流入包数',
    'IN_BYTES': '流入BYTES',
    'OUT_PKTS': '流出包数',
    'OUT_BYTES': '流出BYTES',
    'HTTP_HOST': 'HTTP HOST',
    'HTTP_URL': 'HTTP URL',
    'HTTP_METHOD': 'HTTP METHOD',
    'HTTP_RET_CODE': 'HTTP返回值',
    'payload': '有效载荷',
    //
    'SECOND': '秒',
    'MINUTE': '分钟',
    'HOUR': '小时',
    'DAY': '天',
    'WEEK': '周',
    'MONTH': '月',
    'QUATER': '季度',
    'YEAR': '年',
    //
    'LAST_MINUTE': '过去1分钟',
    'LAST_TEN_MINUTE': '过去10分钟',
    'LAST_HOUR': '过去1小时',
    'LAST_DAY': '过去1天',
    'LAST_WEEK': '过去1周',
    'LAST_MONTH': '过去1月',
    'LAST_QUATER': '过去1季度',
    'LAST_YEAR': '过去1年',
    //
    'ONE_SECOND_LAST_MINUTE': '过去1分钟，每秒',
    'ONE_MINUTE_LAST_TEN_MINUTE': '过去10分钟，每分钟',
    'ONE_MINUTE_LAST_HOUR': '过去1小时，每分钟',
    'ONE_HOUR_LAST_DAY': '过去1天，每小时',
    'ONE_HOUR_LAST_WEEK': '过去1周，每小时',
    'ONE_DAY_LAST_WEEK': '过去1周，每天',
    'ONE_DAY_LAST_MONTH': '过去1月，每天',
    'ONE_DAY_LAST_QUATER': '过去1季度，每天',
    'ONE_WEEK_LAST_QUATER': '过去1季度，每周',
    'ONE_WEEK_LAST_YEAR': '过去1年，每周',
    'ONE_MONTH_LAST_YEAR': '过去1年，每月',
    'ONE_MONTHE_SINCE_START': '每月',
    'ANY': '任意',
    'UNKNOWN': '未知',
    'IN': '进',
    'OUT': '出'
  },
  common: {
    'ip': 'IP',
    'mac': 'MAC',
    'os': '操作系统',
    'make': '品牌',
    'status': '状态',
    'na': '无',
    'total': '总计',
    'eventTotal': '事件总计',
    'assetTotal': '资产总计',
    'loading': '加载数据，请稍候......',
    'srcIp': '源IP',
    'srcPort': '源端口',
    'dstIp': '目标IP',
    'dstPort': '目标端口',
    'protocolL4': 'L4协议',
    'protocolL7': 'L7协议',
    'rule': '规则',
    'negate': '不是',
    'must': '是',
    'mustnot': '不是',
    'severity': '级别',
    'noData': '无数据',
    'LOW': '低危',
    'MEDIUM': '中危',
    'HIGH': '高危',
    'showMonitor': '是否监测',
    'turnOnMonitor': '开启监测',
    'monitorFlow': '开启流量监测',
    'monitorTraffic': '开启访问监测',
    'controlDeviceRules': '关键操作规则',
    'content': '内容',
    'agent': '采集器',
    'details': '查看',
    'template': '模版',
    'direction': '方向',
    'port': '端口',
    'flowRule': '流量规则',
    'flowTotal': '流量总计（bytes）',
    'flowAvgTotal': '平均流量（bytes）／总流量（bytes）',
    'flowInAvgTotal': '流入平均流量（bytes）／总流量（bytes）',
    'flowOutAvgTotal': '流出平均流量（bytes）／总流量（bytes）',
    //
    'avgFlowIn': '流入平均流量 (bytes)',
    'avgFlowOut': '流出平均流量 (bytes)',
    'minFlowIn': '流入最低流量 (bytes)',
    'maxFlowIn': '流入最高流量 (bytes)',
    'minFlowOut': '流出最低流量 (bytes)',
    'maxFlowOut': '流出最高流量 (bytes)',
    //
    'alertSpikeOn': '连续峰值报警',
    'turnOnAlertSpike': '开启连续峰值报警',
    'alertSpikeFrameworkNumber': '窗口数值',
    'alertSpikeFrameworkUnit': '窗口单位',
    'alertSpikeHeight': '峰值高度',
    'alertSpikeOnDisplay': '连续峰值报警已开启',
    'alertSpikeOffDisplay': '连续峰值报警已关闭',
    //
    'cronAlertSpikeOn': '固定时间峰值报警',
    'turnOnCronAlertSpike': '开启固定时间峰值报警',
    'cronAlertSpikeFrameworkNumber': '窗口数值',
    'cronAlertSpikeFrameworkUnit': '窗口单位',
    'cronAlertSpikeFrameworkSamplingCount': '窗口取样个数',
    'cronAlertSpikeFrameworkInterval': '固定时间间隔',
    'cronAlertSpikeHeight': '峰值高度',
    'cronAlertSpikeOnDisplay': '固定时间峰值报警已开启',
    'cronAlertSpikeOffDisplay': '固定时间峰值报警已关闭',
    //
    'flowTotalIn': '流入流量总计（bytes）',
    'flowTotalOut': '流出流量总计（bytes）',
    'monitor': '实时监测',
    'flowTotalInByL4': '流入流量总计（bytes）: 按L4 协议细分',
    'flowTotalInByL7': '流入流量总计（bytes）: 按L7 协议细分',
    'flowTotalInBySrcIp': '流入流量总计（bytes）: 按源IP细分',
    'flowTotalInByDstIp': '流入流量总计（bytes）: 按目标IP细分',
    'flowTotalOutByL4': '流出流量总计（bytes）: 按L4 协议细分',
    'flowTotalOutByL7': '流出流量总计（bytes）: 按L7 协议细分',
    'flowTotalOutBySrcIp': '流出流量总计（bytes）: 按源IP细分',
    'flowTotalOutByDstIp': '流出流量总计（bytes）: 按目标IP细分',
    'flowTotalByL7': '流量总计（bytes）: 按L7 协议细分',
    'flowTotalByL4': '流量总计（bytes）: 按L4 协议细分',
    'firewallRuleEventsByRule': '事件总计：按规则细分',
    'firewallRuleEventsBySeverity': '事件总计：按严重级别细分',
    'keyOpEventsByRule': '关键操作：按规则细分',
    'keyOpEventsBySeverity': '关键操作：按规则细分',
    'flowTotalByDstPort': '流量总计（bytes）: 按目标端口细分',
    'avg': '平均流量',
    'movingMeanAvg': '移动平均流量',
    'movingMeanAvgUpperBound': '报警上限',
    'allRule': '所有规则',
    'allSeverity': '所有严重级别',
    'showing': '目前显示',
    'all': '所有',
    'record': '事件记录',
    'detectedTimestamp': '发现时间',
    'advancedSearch': '高级搜索',
    'latestEvents': '最近事件',
    'unknownIp': '未知IP',
    'unknownPort': '未知端口',
    'searchAllEvents': '搜索所有事件',
    'noLatestEvents': '没有最近事件',
    'statusEdit': '状态（双击编辑）',
    'onlyThisRule': '只显示此规则',
    'nodeName': '资产名称（双击编辑）',
    'name': '名称',
    'latitude': '纬度',
    'longitude': '经度',
    'x': 'X 坐标',
    'y': 'Y 坐标',
    'xClickToEdit': 'X坐标（双击编辑）',
    'yClickToEdit': 'Y坐标（双击编辑）',
    'clickMapToSee': '未选',
    'totalProbes': '采集器总计',
    'totalEvents': '事件总计',
    'image': '背景图片',
    'allProbes': '所有采集器',
    'flowIn': '流入流量',
    'flowOut': '流出流量'
  },
  assets: {
    'assets': '所有资产',
    'assetsByStatus': '资产总计：资产状态',
    'alerts': '可疑资产',
    'multipleMac': '可疑MAC',
    'multipleOs': '可疑操作系统',
    'new': '新资产',
    'NEW': '新发现',
    'VALID': '可信',
    'INVALID': '不可信',
    'IGNORED': '可忽略',
    'showIgnored': '显示\'可忽略\'资产',
    'loading': '正在发现资产，请稍候......'
  },
  behaviour: {
    'firewallRule': '访问行为规则'
  },
  rule: {
    'ACTIVE': '已激活',
    'INACTIVE': '禁用',
    'alertTrue': '触发',
    'alertFalse': '不触发',
    'enable': '激活',
    'disable': '禁用'
  },
  login: {
    'login': '登录',
    'username': '用户名',
    'password': '密码',
    'pleaseLogin': '请登录',
    'loginFail': '登录失败'
  },
  label: {
    'confirm': '确认',
    'cancel': '取消',
    'add': '添加',
    'delete': '删除',
    'edit': '编辑',
    'save': '保存',
    'new': '新',
    'start': '开始时间',
    'end': '结束时间',
    'search': '搜索',
    'date': '日期',
    'close': '关闭'
  },
  navigation: {
    'header': 'xAlert 工控全网监测预警平台',
    'dashboard': '仪表盘',
    'assets': '网络资产',
    'flows': '流量监测',
    'behaviours': '网络行为',
    'controlDevices': '关键操作',
    'pageAdmin': '系统配置',
    'userSetting': '用户设置',
    'logout': '注销',
    'createUser': '创建用户',
    'userProfile': '用户资料',
    'userManagement': '用户管理',
    'monitor': '事件监测',
    'flow': '流量监测',
    'traffic': '事件监测',
    'summary': '概览',
    'flowRules': '流量规则',
    'probeAdmin': '采集器配置'
  },
  user: {
    'username': '用户名',
    'password': '密码',
    'usernamePrompt': '请输入用户名',
    'passwordPrompt': '请输入密码',
    'confirmPassword': '请再输入密码一次',
    'role': '权限',
    'admin': '管理员',
    'user': '用户',
    'name': '姓名',
    'newPassword': '若需重置密码,请输入新密码',
    'confirmNewPassword': '请再输入新密码一次'
  },
  validation: {
    'WARN_IP_CIDR_OR_ANY': '请输入有效IP地址或星号',
    'WARN_REQUIRED': '必须填写',
    'WARN_PORT_RANGE_ANY': '请填写1到65535之间的单一端口号，或端口号范围（低-高），或星号',
    'WARN_VALID_INTEGER': '请输入大于零的整数',
    'CREATE_USER_SUCCESS': 'New user created successfully',
    'CREATE_USER_FAIL': 'Failed to create new user, please try again later',
    'CHANGE_PASSWORD_SUCCESS': 'Password reset successfully',
    'CHANGE_PASSWORD_FAIL': 'Failed to reset password, please try again later',
    'UPDATE_USER_SUCCESS': 'User profile updated successfully',
    'UPDATE_USER_FAIL': 'Failed to update user profile, please try again later',
    'UPDATE_USERS_SUCCESS': 'User profiles updated successfully',
    'UPDATE_USERS_FAIL': 'Failed to update user profiles, please try again later',
    'USERNAME_EXISTS': 'Username is taken',
    'PASSWORD_INVALID': 'Password is at minimum 8-digit, only including numbers or characters, with at least 1 number and at least 1 character',
    'PASSWORD_NOTMATCH': 'Passwords do not match',
    'USERNAME_INVALID': 'Username must be a valid email address',
    'USERNAME_DUPLICATE': 'Username is taken',
    'FIELD_REQUIRED': 'Both username and password are required',
    'LONGITUDE_INVALID': '经度格式错误',
    'LATITUDE_INVALID': '纬度格式错误',
    'PERCENTAGE_INVALID': '请输入0到1之间的数字'
  },
  dashboard: {
    'topology': '拓扑图',
    'totalControlDevice': '工控设备总计',
    'totalCriticalOperation': '关键操作总计',
    'mostFlowSource': '通信最多的源地址',
    'mostFlowDestination': '通信最多的目标地址',
    'mostFlowPair': '通信最多的源/目标地址',
    'leastFlowSource': '通信最少的源地址',
    'leastFlowDestination': '通信最少的目标地址',
    'leastFlowPair': '通信最少的源/目标地址',
    'last5min': '过去5分钟',
    'last10min': '过去10分钟',
    'last30min': '过去30分钟',
    'last1hour': '过去1小时',
    'last12hour': '过去12小时',
    'last24hour': '过去24小时',
    'last3day': '过去3天',
    'last7day': '过去1周',
    'last14day': '过去2周',
    'last1month': '过去1个月',
    'last3month': '过去3个月',
    'last6month': '过去6个月',
    'last9month': '过去9个月',
    'last1year': '过去1年',
    'totalAssets': '资产总计',
    'totalAssetsAlerts': '资产报警总计',
    'totalNewAssets': '新资产总计',
    'totalValidAssets': '可信资产总计',
    'totalInvalidAssets': '可疑资产总计',
    'totalIgnoredAssets': '可忽略资产总计',
    'totalFirewallRuleEvents': '通信访问事件',
    'totalFirewallRuleEventsHigh': '通信访问事件 - 高危',
    'totalFirewallRuleEventsMedium': '通信访问事件 - 中危',
    'totalFirewallRuleEventsLow': '通信访问事件 - 低危',
    'totalRuleEvents': '关键操作事件',
    'totalRuleEventsHigh': '关键操作事件 - 高危',
    'totalRuleEventsMedium': '关键操作事件 - 中危',
    'totalRuleEventsLow': '关键操作事件 - 低危'
  },
  route: {
    integrateMonitor: '综合监控',
    overview: '安全总览',
    assets: '网络资产',
    events: '事件监测',
    flows: '流量监测',
    vulnerability: '漏洞监测',
    businessMonitor: '业务监控',
    analysis: '管理分析',
    assetManage: '资产',
    eventManage: '事件',
    flowManage: '流量',
    vulnerabilityManage: '漏洞',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    Table: 'Table',
    dynamicTable: '动态Table',
    dragTable: '拖拽Table',
    inlineEditTable: 'Table内编辑',
    complexTable: '综合Table',
    treeTable: '树形表格',
    customTreeTable: '自定义树表',
    tab: 'Tab',
    form: '表单',
    createForm: '创建表单',
    editForm: '编辑表单',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    screenfull: '全屏',
    localtime: '当前时间',
    theme: '换肤'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    roles: '你的权限',
    switchRoles: '切换权限'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  }
}
