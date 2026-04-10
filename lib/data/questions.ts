import type { Question, SpecialQuestion } from '../types';

// 每维度 6-8 题，运行时随机选 3 题
// options.value: 1=低端, 2=中间, 3=高端
// 选项顺序在前端渲染时自动随机打乱

export const QUESTION_BANK: Record<string, Question[]> = {
  // ═══════════ S1 自尊自信 ═══════════
  S1: [
    {
      id: 'S1_q1', dim: 'S1',
      text: '我不仅是屌丝，我还是joker，我还是咸鱼。这辈子没谈过一场恋爱，胆怯又自卑，我的青春就是一场又一场的意淫。每一次看到别人秀恩爱，都是对我心灵的一次暴击。求求哥们给我们这种小丑一点活路吧。',
      options: [
        { label: '我哭了，这写的就是我', value: 1 },
        { label: '有被冒犯到，但不完全是我', value: 2 },
        { label: '这不是我，我没有这么惨', value: 3 },
      ],
    },
    {
      id: 'S1_q2', dim: 'S1',
      text: '周围的人都比我优秀',
      options: [
        { label: '确实，我是人群中的分母', value: 1 },
        { label: '有时候会这么觉得', value: 2 },
        { label: '不，各有各的路', value: 3 },
      ],
    },
    {
      id: 'S1_q3', dim: 'S1',
      text: '同事无意间说了句"你这个方案不太行啊"，你晚上回家会？',
      options: [
        { label: '翻来覆去想一整晚，把ta说的每个字都拆开分析', value: 1 },
        { label: '会想一会儿，但睡前刷刷手机就忘了', value: 2 },
        { label: '关我屁事，ta又不是甲方', value: 3 },
      ],
    },
    {
      id: 'S1_q4', dim: 'S1',
      text: '朋友发朋友圈晒 offer / 旅游照 / 新车，你内心的弹幕是？',
      options: [
        { label: '人家命好，我就是个废物.jpg', value: 1 },
        { label: '有点酸但还好，点个赞划走', value: 2 },
        { label: '真不错，我也有我自己的节奏', value: 3 },
      ],
    },
    {
      id: 'S1_q5', dim: 'S1',
      text: '面试官问"你觉得你最大的优点是什么？"你脑子里闪过的是？',
      options: [
        { label: '我有优点？让我现编一个', value: 1 },
        { label: '有几个但张不开嘴说', value: 2 },
        { label: '这题简单，我能说三个还带论据', value: 3 },
      ],
    },
    {
      id: 'S1_q6', dim: 'S1',
      text: '拍照的时候发现自己很丑，你的反应是？',
      options: [
        { label: '删掉删掉删掉，这不是我', value: 1 },
        { label: '角度问题，换个滤镜还能抢救', value: 2 },
        { label: '丑就丑吧，又不靠脸吃饭', value: 3 },
      ],
    },
    {
      id: 'S1_q7', dim: 'S1',
      text: '你在群里发了个消息，五分钟没人回复，你会？',
      options: [
        { label: '撤回撤回撤回！是不是说错话了', value: 1 },
        { label: '可能大家在忙吧', value: 2 },
        { label: '爱回不回，我又不是发红包', value: 3 },
      ],
    },
    {
      id: 'S1_q8', dim: 'S1',
      text: '有人夸你"你今天好好看啊"，你的第一反应？',
      options: [
        { label: '他在阴阳我？还是想借钱？', value: 1 },
        { label: '嘴上说谢谢，心里半信半疑', value: 2 },
        { label: '那必须的，今天状态确实在线', value: 3 },
      ],
    },
    {
      id: 'S1_q9', dim: 'S1',
      text: '工作上犯了个低级错误，全组都知道了，你？',
      options: [
        { label: '社死现场，想原地消失，建议地球爆炸', value: 1 },
        { label: '尴尬几分钟，但很快想办法补救', value: 2 },
        { label: '人非圣贤，改了就行，有什么大不了', value: 3 },
      ],
    },
    {
      id: 'S1_q10', dim: 'S1',
      text: '开会的时候你有个想法，但不确定对不对，你会？',
      options: [
        { label: '憋着，万一说错了被笑话呢', value: 1 },
        { label: '等别人先说差不多的，再补充几句', value: 2 },
        { label: '直接说，错了又不会扣工资', value: 3 },
      ],
    },
    {
      id: 'S1_q11', dim: 'S1',
      text: '遇到不会的问题需要问别人，你通常？',
      options: [
        { label: '宁可自己搜三小时也不好意思开口', value: 1 },
        { label: '纠结一会儿才问，还要先说一堆"不好意思打扰了"', value: 2 },
        { label: '直接问，不懂就问是美德', value: 3 },
      ],
    },
    {
      id: 'S1_q12', dim: 'S1',
      text: '你觉得自己的价值主要来源于？',
      options: [
        { label: '别人对我的认可，没有认可我就是空气', value: 1 },
        { label: '内外兼有吧，别人认可会更开心', value: 2 },
        { label: '我自己认可自己就够了，别人的只是bonus', value: 3 },
      ],
    },
    {
      id: 'S1_q13', dim: 'S1',
      text: '做了一件事结果不完美，你对自己说的话更接近？',
      options: [
        { label: '果然什么都做不好，我就是个废物', value: 1 },
        { label: '有瑕疵但也还行吧', value: 2 },
        { label: '已经尽力了，下次再优化', value: 3 },
      ],
    },
    {
      id: 'S1_q14', dim: 'S1',
      text: '领导/老师单独找你谈话，你的第一反应？',
      options: [
        { label: '完了完了完了，我是不是犯事了', value: 1 },
        { label: '有点紧张但先听听啥事', value: 2 },
        { label: '正常沟通而已，有啥好慌的', value: 3 },
      ],
    },
    {
      id: 'S1_q15', dim: 'S1',
      text: '一个人去餐厅吃饭，你会觉得？',
      options: [
        { label: '社死预警，全世界都在看我没朋友', value: 1 },
        { label: '有点尴尬但也能接受', value: 2 },
        { label: '一个人吃饭不香吗？想吃啥吃啥', value: 3 },
      ],
    },
    {
      id: 'S1_q16', dim: 'S1',
      text: '朋友们都在尝试一个新事物（滑板/攀岩/脱口秀），你？',
      options: [
        { label: '不去不去，我肯定是最菜的那个', value: 1 },
        { label: '有点心动也有点怕丢人', value: 2 },
        { label: '冲啊！菜就菜呗，开心就好', value: 3 },
      ],
    },
    {
      id: 'S1_q17', dim: 'S1',
      text: '马上要上台做展示/演讲了，你的状态是？',
      options: [
        { label: '手抖腿软心跳180，像要被公开处刑', value: 1 },
        { label: '有点紧张但能控制', value: 2 },
        { label: '舞台是我的主场，开麦就是了', value: 3 },
      ],
    },
    {
      id: 'S1_q18', dim: 'S1',
      text: '别人送你礼物/请你吃饭，你会觉得？',
      options: [
        { label: '我配吗？会不会太麻烦别人了', value: 1 },
        { label: '谢谢，找机会回请', value: 2 },
        { label: '开心收下，我值得被好好对待', value: 3 },
      ],
    },
    {
      id: 'S1_q19', dim: 'S1',
      text: '你想拒绝别人的不合理要求，但对方是你在意的人，你？',
      options: [
        { label: '忍了吧，拒绝了他们会讨厌我的', value: 1 },
        { label: '委婉表达，希望对方能理解', value: 2 },
        { label: '温柔但坚定地说不，该拒绝就拒绝', value: 3 },
      ],
    },
    {
      id: 'S1_q20', dim: 'S1',
      text: '夏天到了要穿短袖短裤，但你觉得自己身材不够好，你会？',
      options: [
        { label: '长袖长裤焊死，宁可热死也不能被看到', value: 1 },
        { label: '会有点在意但该穿还是穿', value: 2 },
        { label: '我的身材我做主，爱咋穿咋穿', value: 3 },
      ],
    },
    {
      id: 'S1_q21', dim: 'S1',
      text: '在讨论中发现自己说错了一个常识性问题，全场都知道了，你？',
      options: [
        { label: '脚趾扣出三室一厅，未来一周都在回放这个瞬间', value: 1 },
        { label: '尴尬一下但很快就过去了', value: 2 },
        { label: '哈哈我说错了，谢谢纠正，继续聊', value: 3 },
      ],
    },
    {
      id: 'S1_q22', dim: 'S1',
      text: '发了条朋友圈半小时没人点赞，你？',
      options: [
        { label: '删了删了，果然没人在意我', value: 1 },
        { label: '有点失落但算了', value: 2 },
        { label: '我发朋友圈是给自己看的，点赞是附赠品', value: 3 },
      ],
    },
    {
      id: 'S1_q23', dim: 'S1',
      text: '你独自完成了一个很棒的项目，你会怎么做？',
      options: [
        { label: '默默收好，说出来怕被觉得在炫耀', value: 1 },
        { label: '跟关系好的人分享一下', value: 2 },
        { label: '大方分享，这是我应得的荣耀', value: 3 },
      ],
    },
    {
      id: 'S1_q24', dim: 'S1',
      text: '你脑子里那个评价自己的小人，ta说的话通常是？',
      options: [
        { label: '"你不行的""别人都比你好"，每天PUA我', value: 1 },
        { label: '有时候夸有时候骂，看心情', value: 2 },
        { label: '"你很棒""继续加油"，是我的精神啦啦队', value: 3 },
      ],
    },
    {
      id: 'S1_q25', dim: 'S1',
      text: '需要在别人面前展示真实的自己（不加滤镜），你觉得？',
      options: [
        { label: '真实的我太拉了，请让我继续戴面具', value: 1 },
        { label: '在信任的人面前可以', value: 2 },
        { label: '真实的我挺好的啊，有什么不能展示的', value: 3 },
      ],
    },
    {
      id: 'S1_q26', dim: 'S1',
      text: '有人给你提了个"善意的建议"，语气有点居高临下，你？',
      options: [
        { label: '默默听着不说话，回去难过半天', value: 1 },
        { label: '听进去有道理的部分，忽略态度', value: 2 },
        { label: '谢谢你的建议，但语气可以好一点哦', value: 3 },
      ],
    },
    {
      id: 'S1_q27', dim: 'S1',
      text: '你据理力争了一件事但别人不同意，你后续会？',
      options: [
        { label: '是不是我太蠢了才会这么想', value: 1 },
        { label: '可能我们看法不同吧', value: 2 },
        { label: '我坚持我的观点，求同存异', value: 3 },
      ],
    },
    {
      id: 'S1_q28', dim: 'S1',
      text: '你排队排了很久，有人插队到你前面，你会？',
      options: [
        { label: '算了算了，不想惹事', value: 1 },
        { label: '内心不爽但看情况决定要不要说', value: 2 },
        { label: '不好意思，请排队，谢谢', value: 3 },
      ],
    },
    {
      id: 'S1_q29', dim: 'S1',
      text: '生活中遇到好事（升职/中奖/被表白），你的第一反应是？',
      options: [
        { label: '一定是搞错了吧，我不配', value: 1 },
        { label: '开心但有点不敢相信', value: 2 },
        { label: '实至名归，我值得拥有好运', value: 3 },
      ],
    },
    {
      id: 'S1_q30', dim: 'S1',
      text: '你在某个领域确实很有经验，别人来请教你，你会？',
      options: [
        { label: '疯狂谦虚："我也不太懂""我随便说说"', value: 1 },
        { label: '会分享但会加一堆免责声明', value: 2 },
        { label: '大方分享，毕竟我在这方面确实有两把刷子', value: 3 },
      ],
    },
    {
      id: 'S1_q31', dim: 'S1',
      text: '你明明做得很好，但总觉得自己是靠运气蒙混过关的？',
      options: [
        { label: '天天都在等着被拆穿，冒充者综合征晚期', value: 1 },
        { label: '偶尔会这么想', value: 2 },
        { label: '不会，我的实力我清楚', value: 3 },
      ],
    },
    {
      id: 'S1_q32', dim: 'S1',
      text: '在公共场合不小心摔了一跤，全场目击，你？',
      options: [
        { label: '灵魂离体，恨不得时间倒流，这辈子的社死巅峰', value: 1 },
        { label: '尴尬地笑笑赶紧爬起来', value: 2 },
        { label: '自己先笑了，给大家表演个现代舞', value: 3 },
      ],
    },
    {
      id: 'S1_q33', dim: 'S1',
      text: '你的自我评价会因为别人的一句话而大幅波动吗？',
      options: [
        { label: '会，别人夸我我飞天，别人骂我我入地', value: 1 },
        { label: '有波动但不至于太大', value: 2 },
        { label: '不太会，我对自己的判断比较稳', value: 3 },
      ],
    },
    {
      id: 'S1_q34', dim: 'S1',
      text: '有人夸完你之后又补了一句"不过你要是再XX就更好了"，你？',
      options: [
        { label: '只记住了后半句，前面的夸奖全被覆盖了', value: 1 },
        { label: '两边都听进去了', value: 2 },
        { label: '谢谢夸奖，建议我参考一下', value: 3 },
      ],
    },
    {
      id: 'S1_q35', dim: 'S1',
      text: '参加同学聚会，有人混得明显比你好很多，你？',
      options: [
        { label: '自卑到不想去第二次，人比人气死人', value: 1 },
        { label: '会有点小情绪但很快调整', value: 2 },
        { label: '替ta高兴，各自精彩', value: 3 },
      ],
    },
    {
      id: 'S1_q36', dim: 'S1',
      text: '面试前一晚，你的心理状态是？',
      options: [
        { label: '他们怎么可能要我，提前写好被拒的小作文', value: 1 },
        { label: '有点紧张，再准备准备', value: 2 },
        { label: '是他们要面试我，又不是我要面试他们（好吧双向的）', value: 3 },
      ],
    },
    {
      id: 'S1_q37', dim: 'S1',
      text: '你在公开场合不小心读错了一个字，旁边有人纠正了你，你？',
      options: [
        { label: '好想死，接下来一周都会反复回想', value: 1 },
        { label: '谢谢，有点不好意思', value: 2 },
        { label: '哦对，读错了，谢谢哈——继续', value: 3 },
      ],
    },
    {
      id: 'S1_q38', dim: 'S1',
      text: '健身房/泳池更衣室里，你对自己身材的感受是？',
      options: [
        { label: '赶紧换完赶紧走，不想被看', value: 1 },
        { label: '有点不自在但能接受', value: 2 },
        { label: '正常换衣服，我的身体我骄傲', value: 3 },
      ],
    },
    {
      id: 'S1_q39', dim: 'S1',
      text: '你觉得自己的观点和想法重要吗？',
      options: [
        { label: '不重要，反正也没人想听', value: 1 },
        { label: '有时候觉得重要有时候不确定', value: 2 },
        { label: '当然重要，每个人的声音都值得被听到', value: 3 },
      ],
    },
    {
      id: 'S1_q40', dim: 'S1',
      text: '有人在你面前吹嘘自己的成就（暗戳戳踩你），你？',
      options: [
        { label: '微笑点头，心里已经碎成渣了', value: 1 },
        { label: '不太舒服但面上过得去', value: 2 },
        { label: '哦，恭喜恭喜——然后该干嘛干嘛，不上头', value: 3 },
      ],
    },
  ],

  // ═══════════ S2 自我清晰度 ═══════════
  S2: [
    {
      id: 'S2_q1', dim: 'S2',
      text: '我很清楚真正的自己是什么样的',
      options: [
        { label: '不太清楚，我感觉自己是个谜', value: 1 },
        { label: '大概知道，模糊地', value: 2 },
        { label: '门儿清', value: 3 },
      ],
    },
    {
      id: 'S2_q2', dim: 'S2',
      text: '你内心有真正追求的东西吗？',
      options: [
        { label: '没有，我是一条没有梦想的咸鱼', value: 1 },
        { label: '好像有，又好像没有', value: 2 },
        { label: '有，而且很明确', value: 3 },
      ],
    },
    {
      id: 'S2_q3', dim: 'S2',
      text: '如果有人问你"你到底想要什么"，你第一反应是？',
      options: [
        { label: '我也想知道啊！你告诉我啊！', value: 1 },
        { label: '大概知道，但说不太清楚', value: 2 },
        { label: '给我一张A4纸我能列满', value: 3 },
      ],
    },
    {
      id: 'S2_q4', dim: 'S2',
      text: '你会经常觉得"现在做的事不像真正的我会做的"吗？',
      options: [
        { label: '经常，每天都在cosplay一个正常人', value: 1 },
        { label: '偶尔有这种错位感', value: 2 },
        { label: '很少，我做的基本都是我想做的', value: 3 },
      ],
    },
    {
      id: 'S2_q5', dim: 'S2',
      text: '深夜emo时，你通常在想什么？',
      options: [
        { label: '我是谁？我从哪来？WiFi密码是多少？', value: 1 },
        { label: '想一些具体的烦心事', value: 2 },
        { label: '我很少深夜emo，该睡觉就睡觉', value: 3 },
      ],
    },
    {
      id: 'S2_q6', dim: 'S2',
      text: '你有没有过这种体验：兴致勃勃入了个坑，三天后就不感兴趣了？',
      options: [
        { label: '太多了，我的兴趣保质期比酸奶还短', value: 1 },
        { label: '偶尔会这样', value: 2 },
        { label: '不太会，我喜欢的东西能坚持很久', value: 3 },
      ],
    },
    {
      id: 'S2_q7', dim: 'S2',
      text: '做性格测试时（比如现在），你觉得？',
      options: [
        { label: '好多题我都不确定该选哪个，我太复杂了', value: 1 },
        { label: '大部分能选，偶尔纠结一下', value: 2 },
        { label: '每道题我都秒选，因为我太了解自己了', value: 3 },
      ],
    },
    {
      id: 'S2_q8', dim: 'S2',
      text: '你的价值观告诉你应该A，但利益驱使你选B，你通常？',
      options: [
        { label: '我也不知道我到底想要啥，两边反复横跳', value: 1 },
        { label: '会纠结但最终能做出选择', value: 2 },
        { label: '我很清楚我的底线在哪，选了就不后悔', value: 3 },
      ],
    },
    {
      id: 'S2_q9', dim: 'S2',
      text: '别人问"你是个什么样的人"，你能用三句话概括自己吗？',
      options: [
        { label: '三百句也说不清楚，我是薛定谔的人格', value: 1 },
        { label: '大概能说但不太确定全不全', value: 2 },
        { label: '三句话太多了，一句话就够', value: 3 },
      ],
    },
    {
      id: 'S2_q10', dim: 'S2',
      text: '你做一件事，到底是自己真心想做还是被外界推着走？',
      options: [
        { label: '经常分不清，好像都是被安排的', value: 1 },
        { label: '有时能分清有时分不清', value: 2 },
        { label: '我很清楚哪些是发自内心的，哪些是外部压力', value: 3 },
      ],
    },
    {
      id: 'S2_q11', dim: 'S2',
      text: '你突然情绪低落了，你能快速定位到原因吗？',
      options: [
        { label: '不知道啊，就是突然emo了，原因是个谜', value: 1 },
        { label: '想一想大概能猜到', value: 2 },
        { label: '能，我知道是什么触发了我', value: 3 },
      ],
    },
    {
      id: 'S2_q12', dim: 'S2',
      text: '想象十年后的自己，你脑子里出现的画面是？',
      options: [
        { label: '一片空白，跟404页面似的', value: 1 },
        { label: '模糊的轮廓，看不太清细节', value: 2 },
        { label: '有个比较清晰的画面，虽然可能会变', value: 3 },
      ],
    },
    {
      id: 'S2_q13', dim: 'S2',
      text: '你在公司是一个样，在朋友面前是另一个样，在家又是一个样。你觉得哪个才是真实的你？',
      options: [
        { label: '全都是也全都不是，我到底有几个人格啊', value: 1 },
        { label: '可能都是我的一部分吧', value: 2 },
        { label: '内核是一样的，只是表达方式不同', value: 3 },
      ],
    },
    {
      id: 'S2_q14', dim: 'S2',
      text: '谈恋爱/交朋友时，你的"绝对不能接受"清单有多长？',
      options: [
        { label: '清单？我连什么是dealbreaker都不确定', value: 1 },
        { label: '有几条但不太固定', value: 2 },
        { label: '清晰明了，触碰底线的一律拜拜', value: 3 },
      ],
    },
    {
      id: 'S2_q15', dim: 'S2',
      text: '面对两个都还行的选项（比如两份工作/两个城市），你？',
      options: [
        { label: '完全不知道自己更想要哪个，抛硬币吧', value: 1 },
        { label: '会纠结但能慢慢想清楚', value: 2 },
        { label: '我知道自己不想要什么，排除法秒选', value: 3 },
      ],
    },
    {
      id: 'S2_q16', dim: 'S2',
      text: '你有没有过"我怎么跟昨天的我观点完全相反"的时刻？',
      options: [
        { label: '家常便饭，我的立场比天气还多变', value: 1 },
        { label: '偶尔会，但大方向没变', value: 2 },
        { label: '很少，我的核心观点一直挺稳定的', value: 3 },
      ],
    },
    {
      id: 'S2_q17', dim: 'S2',
      text: '翻到小时候的日记/照片，你觉得那个小孩和现在的你？',
      options: [
        { label: '完全是两个物种，我已经不认识ta了', value: 1 },
        { label: '变了不少但还有些影子', value: 2 },
        { label: '核心没变，还是那个味儿', value: 3 },
      ],
    },
    {
      id: 'S2_q18', dim: 'S2',
      text: '你知道什么事情会让你瞬间破防吗？',
      options: [
        { label: '每次破防都很突然，完全预料不到', value: 1 },
        { label: '大概知道几个雷区', value: 2 },
        { label: '门儿清，我对自己的情绪地图烂熟于心', value: 3 },
      ],
    },
    {
      id: 'S2_q19', dim: 'S2',
      text: '关于未来要走什么路（职业/生活方式），你？',
      options: [
        { label: '迷茫到像在大雾里开车，没有导航', value: 1 },
        { label: '有个大方向但具体路径不确定', value: 2 },
        { label: '路线图已经画好了，正在按导航走', value: 3 },
      ],
    },
    {
      id: 'S2_q20', dim: 'S2',
      text: '你的穿衣风格/审美偏好，这几年变化大吗？',
      options: [
        { label: '一年一个风格，我的衣柜像变装秀', value: 1 },
        { label: '有些变化但大方向差不多', value: 2 },
        { label: '很稳定，我知道自己适合什么', value: 3 },
      ],
    },
    {
      id: 'S2_q21', dim: 'S2',
      text: '身边的人都在做某件事（比如考公/考研/投资），你会？',
      options: [
        { label: '跟风加入，大家都做肯定没错吧', value: 1 },
        { label: '会了解但也会想想适不适合自己', value: 2 },
        { label: '我有我的节奏，别人的路不一定适合我', value: 3 },
      ],
    },
    {
      id: 'S2_q22', dim: 'S2',
      text: '如果要你写出人生中最重要的三个信念，你？',
      options: [
        { label: '我有信念？让我先想想我信什么', value: 1 },
        { label: '能写出来但要想一会儿', value: 2 },
        { label: '秒写，这些东西一直在我心里', value: 3 },
      ],
    },
    {
      id: 'S2_q23', dim: 'S2',
      text: '你发现自己在某些情况下总是用同一种方式应对（比如逃避/讨好/硬刚），你？',
      options: [
        { label: '啥？我有固定模式吗？没注意过', value: 1 },
        { label: '好像是有，但说不太清楚', value: 2 },
        { label: '我知道我的应对模式，也知道哪些需要调整', value: 3 },
      ],
    },
    {
      id: 'S2_q24', dim: 'S2',
      text: '一个人独处的时候，你更多的感受是？',
      options: [
        { label: '不安，好像必须做点什么填满时间', value: 1 },
        { label: '还行，偶尔享受偶尔无聊', value: 2 },
        { label: '很自在，这是我和自己对话的时间', value: 3 },
      ],
    },
    {
      id: 'S2_q25', dim: 'S2',
      text: '如果要你列出一个你佩服的人，你能说出佩服ta什么吗？',
      options: [
        { label: '说不清，就是觉得ta好厉害', value: 1 },
        { label: '大概能说出几个点', value: 2 },
        { label: '能，而且我知道ta身上哪些特质是我也想要的', value: 3 },
      ],
    },
    {
      id: 'S2_q26', dim: 'S2',
      text: '你会不会有种感觉：嘴上说的和心里想的不一样，但自己都没发现？',
      options: [
        { label: '经常，等别人指出来我才发现我在骗自己', value: 1 },
        { label: '偶尔会这样', value: 2 },
        { label: '不太会，我对自己挺诚实的', value: 3 },
      ],
    },
    {
      id: 'S2_q27', dim: 'S2',
      text: '让你讲讲"你的故事"——从小到大怎么走到今天的，你觉得？',
      options: [
        { label: '一团乱麻，我自己都理不清因果', value: 1 },
        { label: '能讲个大概但细节模糊', value: 2 },
        { label: '我能讲一个有头有尾、逻辑自洽的故事', value: 3 },
      ],
    },
    {
      id: 'S2_q28', dim: 'S2',
      text: '你最看重什么？（钱/自由/关系/成就）能秒答吗？',
      options: [
        { label: '都重要又都不确定，我需要一个计算器', value: 1 },
        { label: '大概有个排序但不太固定', value: 2 },
        { label: '秒答，我的优先级清清楚楚', value: 3 },
      ],
    },
    {
      id: 'S2_q29', dim: 'S2',
      text: '你喜欢的东西（音乐/电影/食物类型），会因为身边人的影响经常变吗？',
      options: [
        { label: '跟谁玩就喜欢什么，像变色龙', value: 1 },
        { label: '会参考但不会完全跟随', value: 2 },
        { label: '我的口味很稳定，不太受别人影响', value: 3 },
      ],
    },
    {
      id: 'S2_q30', dim: 'S2',
      text: '你觉得什么东西是无论如何都不会改变的、构成"你之所以是你"的核心？',
      options: [
        { label: '想不出来，我感觉自己是一滩水，什么形状都行', value: 1 },
        { label: '有几个但不太确定', value: 2 },
        { label: '我知道我的锚点在哪，风浪再大也不会漂走', value: 3 },
      ],
    },
    {
      id: 'S2_q31', dim: 'S2',
      text: '别人对你的评价和你对自己的评价，差距大吗？',
      options: [
        { label: '别人眼里的我和我眼里的我好像不是同一个人', value: 1 },
        { label: '有些差距但大体一致', value: 2 },
        { label: '差不多，我表里如一', value: 3 },
      ],
    },
    {
      id: 'S2_q32', dim: 'S2',
      text: '让你描述自己的情绪，你能分辨出"焦虑""烦躁""失落"的区别吗？',
      options: [
        { label: '都是"不爽"，细分不了，我的情绪只有好和不好两档', value: 1 },
        { label: '能分大类但细分有点难', value: 2 },
        { label: '能，我的情绪词典很丰富', value: 3 },
      ],
    },
    {
      id: 'S2_q33', dim: 'S2',
      text: '做选择的时候，你的直觉可靠吗？',
      options: [
        { label: '我的直觉跟翻硬币差不多', value: 1 },
        { label: '有时准有时不准', value: 2 },
        { label: '挺准的，因为直觉其实是我对自己的深度理解', value: 3 },
      ],
    },
    {
      id: 'S2_q34', dim: 'S2',
      text: '你在亲密关系中表现出的样子，和你自己认知的自己一致吗？',
      options: [
        { label: '恋爱中的我完全是另一个人，连我自己都不认识', value: 1 },
        { label: '有些不同但内核差不多', value: 2 },
        { label: '很一致，我不管在哪个关系中都是我自己', value: 3 },
      ],
    },
    {
      id: 'S2_q35', dim: 'S2',
      text: '你的人生哲学/座右铭是什么？能脱口而出吗？',
      options: [
        { label: '我有人生哲学？我连今天中午吃什么都不知道', value: 1 },
        { label: '好像有但不太成体系', value: 2 },
        { label: '有，而且一直在指引我的行动', value: 3 },
      ],
    },
    {
      id: 'S2_q36', dim: 'S2',
      text: '回顾过去一年，你觉得自己成长了吗？成长在哪？',
      options: [
        { label: '不知道算不算成长，我好像只是又老了一岁', value: 1 },
        { label: '感觉有变化但说不具体', value: 2 },
        { label: '能具体说出几个维度的进步', value: 3 },
      ],
    },
    {
      id: 'S2_q37', dim: 'S2',
      text: '有人质疑你的身份/能力/价值观，你会动摇吗？',
      options: [
        { label: '会，然后开始怀疑人生，进入存在主义危机', value: 1 },
        { label: '会想一下但不至于全盘推翻', value: 2 },
        { label: '不太会，我对自己的认知很稳', value: 3 },
      ],
    },
    {
      id: 'S2_q38', dim: 'S2',
      text: '你想要的成长方向，你能描述清楚吗？',
      options: [
        { label: '不能，我只知道"变好"但什么是好不知道', value: 1 },
        { label: '有个模糊的方向感', value: 2 },
        { label: '能，我知道我要补什么短板、发展什么长板', value: 3 },
      ],
    },
    {
      id: 'S2_q39', dim: 'S2',
      text: '关于自己不确定的部分，你的态度是？',
      options: [
        { label: '很焦虑，不确定让我很没安全感', value: 1 },
        { label: '有点不舒服但能接受', value: 2 },
        { label: '没关系，慢慢探索就好，不急', value: 3 },
      ],
    },
    {
      id: 'S2_q40', dim: 'S2',
      text: '你有没有那种"明明选了A但一直想着B"的纠结体质？',
      options: [
        { label: '我就是纠结本结，每次选完都在后悔', value: 1 },
        { label: '偶尔会这样但大多数时候还好', value: 2 },
        { label: '选了就是选了，往前看不回头', value: 3 },
      ],
    },
  ],

  // ═══════════ S3 核心价值 ═══════════
  S3: [
    {
      id: 'S3_q1', dim: 'S3',
      text: '我一定要不断往上爬、变得更厉害',
      options: [
        { label: '不，我和我的床已经签了终身合同', value: 1 },
        { label: '有时候想卷，有时候想躺', value: 2 },
        { label: '必须的，不进步就是退步', value: 3 },
      ],
    },
    {
      id: 'S3_q2', dim: 'S3',
      text: '别人怎么评价你，你在意吗？',
      options: [
        { label: '在意，会反复回想', value: 1 },
        { label: '看谁说的，关系好的人我会在意', value: 2 },
        { label: '无所谓，我活给自己看', value: 3 },
      ],
    },
    {
      id: 'S3_q3', dim: 'S3',
      text: '周末躺了两天什么都没干，你的感受是？',
      options: [
        { label: '躺平真香，人生巅峰不过如此', value: 1 },
        { label: '有点小内疚但很快就原谅了自己', value: 2 },
        { label: '焦虑到不行，浪费的每一秒都在控诉我', value: 3 },
      ],
    },
    {
      id: 'S3_q4', dim: 'S3',
      text: '看到同龄人创业成功/升职加薪，你的真实反应是？',
      options: [
        { label: '跟我有什么关系，人家的命', value: 1 },
        { label: '有点触动但只限于触动', value: 2 },
        { label: '行，被刺激到了，我也得加把劲', value: 3 },
      ],
    },
    {
      id: 'S3_q5', dim: 'S3',
      text: '如果人生是一款游戏，你更倾向于？',
      options: [
        { label: '挂机摸鱼，不被踢就行', value: 1 },
        { label: '佛系推主线，不肝不氪', value: 2 },
        { label: '全成就全收集，排行榜前三', value: 3 },
      ],
    },
    {
      id: 'S3_q6', dim: 'S3',
      text: '闹钟响了，今天没有必须做的事，你会？',
      options: [
        { label: '关掉闹钟继续睡，理直气壮', value: 1 },
        { label: '纠结一下，最终还是多躺了半小时', value: 2 },
        { label: '起来了，没事也可以提升自己', value: 3 },
      ],
    },
    {
      id: 'S3_q7', dim: 'S3',
      text: '给你两个offer：A钱多但无聊到抠脚，B工资一般但你超感兴趣，你选？',
      options: [
        { label: 'A啊，有钱就能找到生活的意义', value: 1 },
        { label: '好纠结，两边都有道理', value: 2 },
        { label: 'B，干自己喜欢的事才是yyds', value: 3 },
      ],
    },
    {
      id: 'S3_q8', dim: 'S3',
      text: '为了一个你认定的目标，你能牺牲多少娱乐时间？',
      options: [
        { label: '零。我的快乐不能被任何目标绑架', value: 1 },
        { label: '可以牺牲一些但不能全没了', value: 2 },
        { label: '该闭关就闭关，娱乐什么时候都能补', value: 3 },
      ],
    },
    {
      id: 'S3_q9', dim: 'S3',
      text: '你有没有特别崇拜的人？ta的哪一点打动了你？',
      options: [
        { label: '没有，崇拜这种东西太累了', value: 1 },
        { label: '有几个觉得不错的但谈不上崇拜', value: 2 },
        { label: '有，ta的某些信念深深影响了我', value: 3 },
      ],
    },
    {
      id: 'S3_q10', dim: 'S3',
      text: '现在给你一万块和三个月后给你三万块，你选？',
      options: [
        { label: '现在就要！当下快乐最重要', value: 1 },
        { label: '会纠结，但可能选三万', value: 2 },
        { label: '三万，延迟满足是基本操作', value: 3 },
      ],
    },
    {
      id: 'S3_q11', dim: 'S3',
      text: '减肥/学习中途遇到火锅/游戏的诱惑，你？',
      options: [
        { label: '诱惑是什么？是我主动投奔的', value: 1 },
        { label: '挣扎一下，五五开', value: 2 },
        { label: '能抵住，目标面前诱惑都是纸老虎', value: 3 },
      ],
    },
    {
      id: 'S3_q12', dim: 'S3',
      text: '让你给自己人生中最重要的五样东西排个序，你能排清楚吗？',
      options: [
        { label: '排不出来，好像什么都无所谓', value: 1 },
        { label: '能排个大概但不太确定', value: 2 },
        { label: '很清楚，我的价值排序一直挺明确的', value: 3 },
      ],
    },
    {
      id: 'S3_q13', dim: 'S3',
      text: '你有没有想过自己死后想被记住什么？',
      options: [
        { label: '没想过，活都活不明白还想死后', value: 1 },
        { label: '偶尔想过但没太认真', value: 2 },
        { label: '想过，我希望留下一些有意义的东西', value: 3 },
      ],
    },
    {
      id: 'S3_q14', dim: 'S3',
      text: '工作和生活只能二选一重点发展，你？',
      options: [
        { label: '生活啊，命只有一条，班可以不上', value: 1 },
        { label: '尽量平衡，都要', value: 2 },
        { label: '现阶段工作优先，打好基础才有好生活', value: 3 },
      ],
    },
    {
      id: 'S3_q15', dim: 'S3',
      text: '你更享受"经历了什么"还是"达成了什么"？',
      options: [
        { label: '经历，人生就是一场体验游戏', value: 1 },
        { label: '都要，但稍微偏一边', value: 2 },
        { label: '达成，没有成果的经历是浪费时间', value: 3 },
      ],
    },
    {
      id: 'S3_q16', dim: 'S3',
      text: '你学新东西的主要动力是？',
      options: [
        { label: '被逼的，不学就被淘汰', value: 1 },
        { label: '一半兴趣一半需要', value: 2 },
        { label: '主动学，知识和技能就是力量', value: 3 },
      ],
    },
    {
      id: 'S3_q17', dim: 'S3',
      text: '你怎么看待竞争这件事？',
      options: [
        { label: '能不竞争就不竞争，和平发展', value: 1 },
        { label: '适度竞争可以，别太卷', value: 2 },
        { label: '竞争让我兴奋，它能激发我的最佳状态', value: 3 },
      ],
    },
    {
      id: 'S3_q18', dim: 'S3',
      text: '朋友买了个名牌包/新车在你面前秀，你内心的OS？',
      options: [
        { label: '好看是好看，但我对这些没啥追求', value: 1 },
        { label: '有点心动，但也就想想', value: 2 },
        { label: '我也要搞一个，这就是我努力的动力啊', value: 3 },
      ],
    },
    {
      id: 'S3_q19', dim: 'S3',
      text: '有个机会能帮到很多人但你自己没什么好处，你？',
      options: [
        { label: '没好处？那算了，我不是圣人', value: 1 },
        { label: '看情况，不太麻烦的话可以', value: 2 },
        { label: '去，帮助别人本身就是价值', value: 3 },
      ],
    },
    {
      id: 'S3_q20', dim: 'S3',
      text: '成长需要走出舒适区，你愿意吗？',
      options: [
        { label: '我的舒适区是我最后的堡垒，谁也别想让我出去', value: 1 },
        { label: '偶尔可以探探头', value: 2 },
        { label: '愿意，不舒服才有进步', value: 3 },
      ],
    },
    {
      id: 'S3_q21', dim: 'S3',
      text: '买东西的时候你更倾向于？',
      options: [
        { label: '什么便宜买什么，实用就行', value: 1 },
        { label: '性价比优先但偶尔也买点好的', value: 2 },
        { label: '要买就买好的，品质代表态度', value: 3 },
      ],
    },
    {
      id: 'S3_q22', dim: 'S3',
      text: '你觉得"成功"更像什么？',
      options: [
        { label: '有个稳定收入、能躺平就是成功', value: 1 },
        { label: '过上自己满意的生活', value: 2 },
        { label: '在某个领域做到顶尖、被认可', value: 3 },
      ],
    },
    {
      id: 'S3_q23', dim: 'S3',
      text: '你觉得时间更像什么？',
      options: [
        { label: '反正都要死，时间浪费一点也无所谓', value: 1 },
        { label: '时间还是要珍惜的但不必太紧绷', value: 2 },
        { label: '时间是最贵的货币，一秒都不想浪费', value: 3 },
      ],
    },
    {
      id: 'S3_q24', dim: 'S3',
      text: '你更相信"天赋决定上限"还是"努力决定上限"？',
      options: [
        { label: '天赋，没天赋努力也白搭', value: 1 },
        { label: '都重要', value: 2 },
        { label: '努力，天赋只是起点，勤奋才是王道', value: 3 },
      ],
    },
    {
      id: 'S3_q25', dim: 'S3',
      text: '面前有一座看起来很难爬的山，你？',
      options: [
        { label: '绕路，干嘛跟自己过不去', value: 1 },
        { label: '看看有没有缆车', value: 2 },
        { label: '冲！越难的事完成后越爽', value: 3 },
      ],
    },
    {
      id: 'S3_q26', dim: 'S3',
      text: '你更看重"自由"还是"安全"？',
      options: [
        { label: '自由，宁可颠沛流离也不要铁笼子', value: 1 },
        { label: '两者平衡最好', value: 2 },
        { label: '安全感先到位，才有底气去追求自由', value: 3 },
      ],
    },
    {
      id: 'S3_q27', dim: 'S3',
      text: '你对创新和传统的看法？',
      options: [
        { label: '传统又不是不能用，干嘛折腾', value: 1 },
        { label: '在传统基础上适当创新', value: 2 },
        { label: '必须创新，不进则退', value: 3 },
      ],
    },
    {
      id: 'S3_q28', dim: 'S3',
      text: '你对"够用就好"和"追求卓越"哪个更有感？',
      options: [
        { label: '够用就好，差不多得了', value: 1 },
        { label: '大部分事情够用就行，少数要做到最好', value: 2 },
        { label: '追求卓越，要做就做到最好', value: 3 },
      ],
    },
    {
      id: 'S3_q29', dim: 'S3',
      text: '你想过自己能给这个世界带来什么影响吗？',
      options: [
        { label: '我能把自己喂饱就不错了', value: 1 },
        { label: '偶尔会想但觉得个人力量有限', value: 2 },
        { label: '想过，而且我在努力让它发生', value: 3 },
      ],
    },
    {
      id: 'S3_q30', dim: 'S3',
      text: '你对自律的态度？',
      options: [
        { label: '自律是什么？我只会自我放弃', value: 1 },
        { label: '间歇性自律，持续性摆烂', value: 2 },
        { label: '自律给我自由，已经成为习惯了', value: 3 },
      ],
    },
    {
      id: 'S3_q31', dim: 'S3',
      text: '你愿意花多少钱在"提升自己"上（课程/书/健身）？',
      options: [
        { label: '零。免费的资源不够用吗？', value: 1 },
        { label: '适当投入', value: 2 },
        { label: '这是最值得的投资，舍得花', value: 3 },
      ],
    },
    {
      id: 'S3_q32', dim: 'S3',
      text: '失败了一次，你对失败的看法？',
      options: [
        { label: '果然不行，我不是这块料', value: 1 },
        { label: '失败正常，下次注意', value: 2 },
        { label: '失败是最好的老师，这次学到了很多', value: 3 },
      ],
    },
    {
      id: 'S3_q33', dim: 'S3',
      text: '如果能在"真实但平庸"和"虚假但光鲜"之间选，你？',
      options: [
        { label: '光鲜啊，面子比里子重要', value: 1 },
        { label: '纠结，但可能选真实', value: 2 },
        { label: '真实，活得通透比活得好看重要', value: 3 },
      ],
    },
    {
      id: 'S3_q34', dim: 'S3',
      text: '你更看重"感情关系"还是"事业发展"？',
      options: [
        { label: '感情关系，有爱就够了', value: 1 },
        { label: '两个都重要，缺一不可', value: 2 },
        { label: '事业优先，经济基础决定上层建筑', value: 3 },
      ],
    },
    {
      id: 'S3_q35', dim: 'S3',
      text: '你对"学到老活到老"这句话的态度？',
      options: [
        { label: '不了谢谢，毕业那天我就把学习能力还给老师了', value: 1 },
        { label: '道理我都懂，但执行力有限', value: 2 },
        { label: '认同并且在践行，学习是终身的事', value: 3 },
      ],
    },
    {
      id: 'S3_q36', dim: 'S3',
      text: '你更希望自己的人生是"稳定但可预测"还是"波动但精彩"？',
      options: [
        { label: '稳定，我最怕变化了', value: 1 },
        { label: '稍微有点波动就好', value: 2 },
        { label: '精彩！人生就该充满惊喜和挑战', value: 3 },
      ],
    },
    {
      id: 'S3_q37', dim: 'S3',
      text: '你觉得健康和享受冲突的时候（比如熬夜/暴食），你通常选？',
      options: [
        { label: '享受当下，明天的事明天说', value: 1 },
        { label: '尽量克制但偶尔放纵', value: 2 },
        { label: '健康第一，长期主义', value: 3 },
      ],
    },
    {
      id: 'S3_q38', dim: 'S3',
      text: '你对"独立"这个品质的看法？',
      options: [
        { label: '能靠别人为什么要靠自己', value: 1 },
        { label: '重要但不必事事独立', value: 2 },
        { label: '非常重要，不依赖任何人是我的底气', value: 3 },
      ],
    },
    {
      id: 'S3_q39', dim: 'S3',
      text: '你是更喜欢做有创意但有风险的事，还是稳妥但常规的事？',
      options: [
        { label: '稳妥的，别给我整幺蛾子', value: 1 },
        { label: '看具体情况', value: 2 },
        { label: '有创意的！风险和回报是兄弟', value: 3 },
      ],
    },
    {
      id: 'S3_q40', dim: 'S3',
      text: '你是更享受"计划中的执行"还是"随心所欲的自由"？',
      options: [
        { label: '随心所欲，计划是用来打破的', value: 1 },
        { label: '有个大框架就行，细节随意', value: 2 },
        { label: '计划执行，一切尽在掌控才安心', value: 3 },
      ],
    },
  ],

  // ═══════════ E1 依恋安全感 ═══════════
  E1: [
    {
      id: 'E1_q1', dim: 'E1',
      text: '对象超过5小时没回消息，说自己拉肚子了，你的反应？',
      options: [
        { label: '拉肚子能拉5小时？ta一定在骗我', value: 1 },
        { label: '将信将疑，先不追问了', value: 2 },
        { label: '那挺难受的，让ta好好休息吧', value: 3 },
      ],
    },
    {
      id: 'E1_q2', dim: 'E1',
      text: '我在感情里经常担心被抛弃',
      options: [
        { label: '是的，每天都在演《被偷走的那五年》', value: 1 },
        { label: '偶尔会闪过这个念头', value: 2 },
        { label: '不会，该来的会来，该走的留不住', value: 3 },
      ],
    },
    {
      id: 'E1_q3', dim: 'E1',
      text: '对象和异性朋友单独吃了顿饭，提前告诉了你，你？',
      options: [
        { label: '心里已经上演了一部完整的出轨连续剧', value: 1 },
        { label: '有点在意但能按住不发作', value: 2 },
        { label: '吃个饭而已，我又不是控制狂', value: 3 },
      ],
    },
    {
      id: 'E1_q4', dim: 'E1',
      text: '对方突然说"我想一个人静一静"，你的CPU占用率？',
      options: [
        { label: '100%，开始疯狂分析是不是要分手', value: 1 },
        { label: '70%，有点紧张但还能忍', value: 2 },
        { label: '10%，正好我也能打会儿游戏', value: 3 },
      ],
    },
    {
      id: 'E1_q5', dim: 'E1',
      text: '翻到对象手机里有和前任的合照（没删干净），你会？',
      options: [
        { label: '当场心态爆炸，开始审讯', value: 1 },
        { label: '不太舒服但能理性看待', value: 2 },
        { label: '都过去了，有什么好在意的', value: 3 },
      ],
    },
    {
      id: 'E1_q6', dim: 'E1',
      text: '你暗恋的人给所有人都发了"新年快乐"，你？',
      options: [
        { label: '群发的……我果然不特别', value: 1 },
        { label: '至少还记得发给我', value: 2 },
        { label: '新年快乐！然后继续该干嘛干嘛', value: 3 },
      ],
    },
    {
      id: 'E1_q7', dim: 'E1',
      text: '恋爱中对方夸了别人好看，你？',
      options: [
        { label: '那你跟ta过去啊！！（内心戏）', value: 1 },
        { label: '有一丢丢不爽但表面没说啥', value: 2 },
        { label: '人家确实好看啊，审美正常', value: 3 },
      ],
    },
    {
      id: 'E1_q8', dim: 'E1',
      text: '你最好的朋友突然跟另一个人走得很近，你？',
      options: [
        { label: '被替代了的感觉，友谊的小船说翻就翻', value: 1 },
        { label: '有点小醋但知道这很正常', value: 2 },
        { label: '很好啊，朋友开心我开心', value: 3 },
      ],
    },
    {
      id: 'E1_q9', dim: 'E1',
      text: '对象说"这周末我想自己待着/跟朋友出去"，你？',
      options: [
        { label: '是不是不爱我了？开始内心小剧场', value: 1 },
        { label: '有点失落但能理解', value: 2 },
        { label: '好耶，正好我也有自己的安排', value: 3 },
      ],
    },
    {
      id: 'E1_q10', dim: 'E1',
      text: '和对象吵架了，冷战中，你更担心的是？',
      options: [
        { label: '完了完了，这次是不是真要分了', value: 1 },
        { label: '不太舒服但知道吵架是正常的', value: 2 },
        { label: '气归气，吵完了还是在一起的', value: 3 },
      ],
    },
    {
      id: 'E1_q11', dim: 'E1',
      text: '对象最近工作特别忙，连续一周没什么时间陪你，你？',
      options: [
        { label: '疯狂暗示+试探，是真忙还是不想理我', value: 1 },
        { label: '能理解但还是会有点寂寞', value: 2 },
        { label: '忙就忙呗，各自加油', value: 3 },
      ],
    },
    {
      id: 'E1_q12', dim: 'E1',
      text: '你难过的时候，会主动找人倾诉吗？',
      options: [
        { label: '想找但又怕打扰别人/被拒绝，最后自己扛', value: 1 },
        { label: '看情况，关系好的可以', value: 2 },
        { label: '会找信任的人聊聊，这很正常', value: 3 },
      ],
    },
    {
      id: 'E1_q13', dim: 'E1',
      text: '你曾经被重要的人伤害过，现在面对新关系你？',
      options: [
        { label: '全副武装，把心包了十八层保鲜膜', value: 1 },
        { label: '会谨慎但不至于完全封闭', value: 2 },
        { label: '过去是过去，新关系值得被信任', value: 3 },
      ],
    },
    {
      id: 'E1_q14', dim: 'E1',
      text: '异地恋/长时间不见面，你的安全感会？',
      options: [
        { label: '直线下降，不在眼前就等于不存在', value: 1 },
        { label: '会下降但能通过联系维持', value: 2 },
        { label: '不太受影响，信任不需要物理距离来证明', value: 3 },
      ],
    },
    {
      id: 'E1_q15', dim: 'E1',
      text: '发现对象有个你不知道的小秘密（无害的那种，比如偷偷追星），你？',
      options: [
        { label: '有秘密就是不信任我！为什么要藏着！', value: 1 },
        { label: '有点好奇但不至于生气', value: 2 },
        { label: '每个人都有自己的小空间嘛', value: 3 },
      ],
    },
    {
      id: 'E1_q16', dim: 'E1',
      text: '你能在不频繁联系的情况下依然觉得关系是安全的吗？',
      options: [
        { label: '不能，不联系=感情在消亡', value: 1 },
        { label: '有点难但能努力做到', value: 2 },
        { label: '能，真正的关系不靠消息数量维持', value: 3 },
      ],
    },
    {
      id: 'E1_q17', dim: 'E1',
      text: '偶然看到对象关注了前任的社交账号，你？',
      options: [
        { label: '血压飙升，开始逐条翻评论区找蛛丝马迹', value: 1 },
        { label: '不太舒服但先不急着发作', value: 2 },
        { label: '关注而已，又不是复合', value: 3 },
      ],
    },
    {
      id: 'E1_q18', dim: 'E1',
      text: '对象最近突然变了（比如开始健身/学新东西/换了风格），你的第一反应？',
      options: [
        { label: '是不是在为某个人改变？警报！', value: 1 },
        { label: '有点好奇原因但不至于多想', value: 2 },
        { label: '人都在成长嘛，支持ta', value: 3 },
      ],
    },
    {
      id: 'E1_q19', dim: 'E1',
      text: '对象有个关系很好的异性朋友，经常一起出去，你？',
      options: [
        { label: '每次他们见面我都在家当人肉监控', value: 1 },
        { label: '有点在意但选择相信对象', value: 2 },
        { label: '有朋友很正常，性别不是问题', value: 3 },
      ],
    },
    {
      id: 'E1_q20', dim: 'E1',
      text: '对象在社交场合很受欢迎，有很多人喜欢ta，你？',
      options: [
        { label: '慌得一批，ta随时可能被人抢走', value: 1 },
        { label: '有点危机感但也有点骄傲', value: 2 },
        { label: '对象优秀是好事啊，而且ta选了我', value: 3 },
      ],
    },
    {
      id: 'E1_q21', dim: 'E1',
      text: '你有没有那种"ta会不会找到比我更好的人"的焦虑？',
      options: [
        { label: '天天都在想，焦虑到秃头', value: 1 },
        { label: '偶尔会闪过这个念头', value: 2 },
        { label: '不会，ta选我一定有ta的理由', value: 3 },
      ],
    },
    {
      id: 'E1_q22', dim: 'E1',
      text: '关系中有些暧昧不清的信号（比如对方态度忽冷忽热），你？',
      options: [
        { label: '疯狂分析每个细节，手动开启FBI模式', value: 1 },
        { label: '有点困惑但先观察', value: 2 },
        { label: '直接问清楚，不猜谜', value: 3 },
      ],
    },
    {
      id: 'E1_q23', dim: 'E1',
      text: '你需要对象经常说"我爱你"才能安心吗？',
      options: [
        { label: '需要，不说我就觉得不爱了', value: 1 },
        { label: '偶尔说就行，行动比语言重要', value: 2 },
        { label: '不太需要，对方的日常行为已经说明一切', value: 3 },
      ],
    },
    {
      id: 'E1_q24', dim: 'E1',
      text: '刚认识一个新朋友，你会多快投入信任？',
      options: [
        { label: '至少一年起步，信任是奢侈品', value: 1 },
        { label: '正常节奏，慢慢来', value: 2 },
        { label: '只要感觉对了，很快就能信任', value: 3 },
      ],
    },
    {
      id: 'E1_q25', dim: 'E1',
      text: '在一群人里你觉得自己是"局外人"还是"局内人"？',
      options: [
        { label: '经常觉得自己是多余的那个', value: 1 },
        { label: '看具体的群体', value: 2 },
        { label: '大多数时候都觉得自己是被接纳的', value: 3 },
      ],
    },
    {
      id: 'E1_q26', dim: 'E1',
      text: '吵完架和好之后，你能真的放下吗？',
      options: [
        { label: '嘴上说放下了但心里的裂痕一直在', value: 1 },
        { label: '需要一点时间但能恢复', value: 2 },
        { label: '能，和好就是和好，不翻旧账', value: 3 },
      ],
    },
    {
      id: 'E1_q27', dim: 'E1',
      text: '对象发了条朋友圈但没有跟你有关的内容，你？',
      options: [
        { label: '我在ta心里没有位置，开始精神内耗', value: 1 },
        { label: '注意到了但没太在意', value: 2 },
        { label: '对象又不是只有我一个主题的公众号', value: 3 },
      ],
    },
    {
      id: 'E1_q28', dim: 'E1',
      text: '对象做了个重要决定没提前问你的意见，你？',
      options: [
        { label: '我是不是不重要？被排斥在外了？', value: 1 },
        { label: '稍微有点不舒服但能理解', value: 2 },
        { label: 'ta有独立做决定的权利', value: 3 },
      ],
    },
    {
      id: 'E1_q29', dim: 'E1',
      text: '你相信对象在你不在的时候也会好好对待你们的关系吗？',
      options: [
        { label: '不确定，看不到就心慌', value: 1 },
        { label: '大体相信但偶尔会闪过担忧', value: 2 },
        { label: '完全信任，这是关系的基础', value: 3 },
      ],
    },
    {
      id: 'E1_q30', dim: 'E1',
      text: '在对象面前暴露自己脆弱的一面，你觉得？',
      options: [
        { label: '不行，暴露弱点会让ta看不起我/离开我', value: 1 },
        { label: '看关系到了什么阶段', value: 2 },
        { label: '安全的关系就应该可以展示脆弱', value: 3 },
      ],
    },
    {
      id: 'E1_q31', dim: 'E1',
      text: '你和对象有一些固定的小仪式（晚安消息/每周约会），如果某次没有了，你？',
      options: [
        { label: '感觉天要塌了，这是关系出问题的征兆', value: 1 },
        { label: '会注意到但不至于太紧张', value: 2 },
        { label: '偶尔一次没关系嘛', value: 3 },
      ],
    },
    {
      id: 'E1_q32', dim: 'E1',
      text: '对象情绪不好但不想说原因，你？',
      options: [
        { label: '是不是对我有意见？疯狂自我归因', value: 1 },
        { label: '有点着急但尊重ta的节奏', value: 2 },
        { label: 'ta想说的时候自然会说，我在就好', value: 3 },
      ],
    },
    {
      id: 'E1_q33', dim: 'E1',
      text: '你对这段感情的未来有信心吗？',
      options: [
        { label: '随时准备好了被分手，不敢太乐观', value: 1 },
        { label: '大部分时候有信心，偶尔会犹豫', value: 2 },
        { label: '有信心，好的关系是双方一起经营的', value: 3 },
      ],
    },
    {
      id: 'E1_q34', dim: 'E1',
      text: '对象要出差一周，你的反应？',
      options: [
        { label: '一周？！我可能活不过去', value: 1 },
        { label: '会想念但能正常生活', value: 2 },
        { label: '没问题，短暂分开也挺好的', value: 3 },
      ],
    },
    {
      id: 'E1_q35', dim: 'E1',
      text: '你需要经常和对象在一起才觉得安心吗？',
      options: [
        { label: '是的，不在一起的时候总是心神不宁', value: 1 },
        { label: '偶尔需要但不是一直', value: 2 },
        { label: '不需要频繁在一起，心里有ta就够了', value: 3 },
      ],
    },
    {
      id: 'E1_q36', dim: 'E1',
      text: '你在感情中更倾向于"信任对方"还是"确认一下比较放心"？',
      options: [
        { label: '信任但要验证，查岗是爱的表现（bushi）', value: 1 },
        { label: '以信任为主但偶尔也想确认', value: 2 },
        { label: '选择信任，控制欲不是爱', value: 3 },
      ],
    },
    {
      id: 'E1_q37', dim: 'E1',
      text: '对象遇到困难期（失业/情绪低谷），你对这段关系的信心会变吗？',
      options: [
        { label: '会担心ta会把我也拖下水/推开我', value: 1 },
        { label: '有点担心但相信能一起扛过去', value: 2 },
        { label: '不会变，患难见真情', value: 3 },
      ],
    },
    {
      id: 'E1_q38', dim: 'E1',
      text: '对象没有主动分享ta今天发生的事情，你会？',
      options: [
        { label: '开始脑补是不是有什么在瞒着我', value: 1 },
        { label: '有点好奇可能会问问', value: 2 },
        { label: '没什么特别的就不说了呗', value: 3 },
      ],
    },
    {
      id: 'E1_q39', dim: 'E1',
      text: '你觉得一段好的关系应该让你有什么感受？',
      options: [
        { label: '安全感永远不够，总是需要更多保证', value: 1 },
        { label: '大部分时候是安心的', value: 2 },
        { label: '像一个温暖的港湾，不需要时刻证明什么', value: 3 },
      ],
    },
    {
      id: 'E1_q40', dim: 'E1',
      text: '在感情中遇到小摩擦（比如忘记纪念日/约会迟到），你会？',
      options: [
        { label: '直接联想到"ta不在乎我"的大结论', value: 1 },
        { label: '有点不开心但能就事论事', value: 2 },
        { label: '小事而已，不影响我对关系的信心', value: 3 },
      ],
    },
  ],

  // ═══════════ E2 情感投入度 ═══════════
  E2: [
    {
      id: 'E2_q1', dim: 'E2',
      text: '我对天发誓，我对待每一份感情都是认真的！',
      options: [
        { label: '并没有，我的心是不粘锅', value: 1 },
        { label: '也许？看对象', value: 2 },
        { label: '是的！问心无愧！（拍胸脯）', value: 3 },
      ],
    },
    {
      id: 'E2_q2', dim: 'E2',
      text: '你的恋爱对象集齐了所有成语词典里的优点：温柔敦厚、才高八斗、玉树临风/国色天香。此时你会？',
      options: [
        { label: '就算ta是完美的，我也不会上头', value: 1 },
        { label: '会心动但还保持理智', value: 2 },
        { label: '直接变成恋爱脑，cpu已被爱情占满', value: 3 },
      ],
    },
    {
      id: 'E2_q3', dim: 'E2',
      text: '刚在一起三天，对方生病住院了，你会？',
      options: [
        { label: '微信问候一下，毕竟才三天', value: 1 },
        { label: '会关心，但不至于请假去医院', value: 2 },
        { label: '买了一兜水果就冲过去了', value: 3 },
      ],
    },
    {
      id: 'E2_q4', dim: 'E2',
      text: '分手后你的恢复周期通常是？',
      options: [
        { label: '三天，像重启了一样', value: 1 },
        { label: '一两个月，正常过渡', value: 2 },
        { label: '三年起步，某些歌到现在还不敢听', value: 3 },
      ],
    },
    {
      id: 'E2_q5', dim: 'E2',
      text: '对象说"今天加班不能陪你了"，你的内心活动？',
      options: [
        { label: '哦，那我自己安排，没事', value: 1 },
        { label: '有点遗憾但能理解', value: 2 },
        { label: '失落到想原地升天，但还是说了"好的注意身体"', value: 3 },
      ],
    },
    {
      id: 'E2_q6', dim: 'E2',
      text: '如果感情是一场投资，你的策略是？',
      options: [
        { label: '分散投资，鸡蛋不放一个篮子里', value: 1 },
        { label: '重仓但保留止损线', value: 2 },
        { label: 'All in，梭哈就完事了', value: 3 },
      ],
    },
    {
      id: 'E2_q7', dim: 'E2',
      text: '要你在对象面前哭/暴露最脆弱的一面，你？',
      options: [
        { label: '不行，我的脆弱是最高机密', value: 1 },
        { label: '看关系深度，到了那个程度可以', value: 2 },
        { label: '没啥不能的，在爱的人面前不用装', value: 3 },
      ],
    },
    {
      id: 'E2_q8', dim: 'E2',
      text: '对象生日/纪念日，你的备战状态？',
      options: [
        { label: '到了那天发个红包就行，形式主义没必要', value: 1 },
        { label: '会准备但不会太隆重', value: 2 },
        { label: '提前一个月就开始策划，惊喜必须安排到位', value: 3 },
      ],
    },
    {
      id: 'E2_q9', dim: 'E2',
      text: '对象想要的东西超出你预算了，但ta很想要，你？',
      options: [
        { label: '量力而行，超预算的不买', value: 1 },
        { label: '看能不能找替代品', value: 2 },
        { label: '借钱也买！看到ta开心就值了', value: 3 },
      ],
    },
    {
      id: 'E2_q10', dim: 'E2',
      text: '你在感情中的情绪开放度？',
      options: [
        { label: '我的心是个黑匣子，谁也读不了', value: 1 },
        { label: '选择性地表达一些', value: 2 },
        { label: '几乎什么都会说，开诚布公', value: 3 },
      ],
    },
    {
      id: 'E2_q11', dim: 'E2',
      text: '给对象选礼物，你的用心程度？',
      options: [
        { label: '直接问ta想要啥或者发红包', value: 1 },
        { label: '会花点心思但不至于太夸张', value: 2 },
        { label: '根据平时的对话、暗示去选，ta提过一次的东西我都记着', value: 3 },
      ],
    },
    {
      id: 'E2_q12', dim: 'E2',
      text: '你会偷偷给对象策划惊喜吗？',
      options: [
        { label: '不会，惊喜太累了，又不是拍偶像剧', value: 1 },
        { label: '特别的日子可以搞搞', value: 2 },
        { label: '经常！看到ta惊喜的表情我就充满成就感', value: 3 },
      ],
    },
    {
      id: 'E2_q13', dim: 'E2',
      text: '你谈恋爱更像"深海潜水"还是"浅滩嬉水"？',
      options: [
        { label: '浅滩嬉水，太深了会窒息', value: 1 },
        { label: '适度的深度就好', value: 2 },
        { label: '深海潜水，爱就要沉浸式体验', value: 3 },
      ],
    },
    {
      id: 'E2_q14', dim: 'E2',
      text: '你一般多久会对一个人产生依赖感？',
      options: [
        { label: '很难，我跟谁都保持安全距离', value: 1 },
        { label: '需要一段时间慢慢建立', value: 2 },
        { label: '超快，上头了就拔不出来', value: 3 },
      ],
    },
    {
      id: 'E2_q15', dim: 'E2',
      text: '分手后删不删对方的联系方式和聊天记录？',
      options: [
        { label: '秒删，过去的就该清理干净', value: 1 },
        { label: '留着但会取关/屏蔽', value: 2 },
        { label: '留着，每条记录都是回忆，舍不得删', value: 3 },
      ],
    },
    {
      id: 'E2_q16', dim: 'E2',
      text: '你能清楚地感知到自己在感情中的"边界"在哪吗？',
      options: [
        { label: '边界很清晰，不会因为爱就无底线', value: 1 },
        { label: '有边界但有时候会因为感情模糊', value: 2 },
        { label: '什么边界？爱就是不设限', value: 3 },
      ],
    },
    {
      id: 'E2_q17', dim: 'E2',
      text: '对象遇到大麻烦（比如被裁员/家里出事），你会？',
      options: [
        { label: '安慰几句但不会过度卷入', value: 1 },
        { label: '力所能及地帮忙', value: 2 },
        { label: '放下自己的事全力以赴帮ta，ta的事就是我的事', value: 3 },
      ],
    },
    {
      id: 'E2_q18', dim: 'E2',
      text: '在感情中做那些琐碎的事（做饭/打扫/接送），你觉得？',
      options: [
        { label: '谁愿意做谁做，我不想当免费劳动力', value: 1 },
        { label: '偶尔可以，但不能变成义务', value: 2 },
        { label: '乐在其中，为爱的人做这些我很开心', value: 3 },
      ],
    },
    {
      id: 'E2_q19', dim: 'E2',
      text: '你的爱意表达方式更像？',
      options: [
        { label: '淡如水，默默在心里就好', value: 1 },
        { label: '偶尔冒泡表达一下', value: 2 },
        { label: '炽热如岩浆，恨不得全世界都知道', value: 3 },
      ],
    },
    {
      id: 'E2_q20', dim: 'E2',
      text: '你会和对象一起做长远规划（几年后住哪/养猫还是养狗）吗？',
      options: [
        { label: '不太会，活在当下就好', value: 1 },
        { label: '偶尔聊聊但不会太认真', value: 2 },
        { label: '会！我们的未来规划Excel已经建好了', value: 3 },
      ],
    },
    {
      id: 'E2_q21', dim: 'E2',
      text: '让你为了一段感情冒险（比如异地/跨国/家人反对），你？',
      options: [
        { label: '算了吧，太麻烦了，换一个', value: 1 },
        { label: '会认真考虑但不会盲目', value: 2 },
        { label: '爱了就冲，条件都是纸老虎', value: 3 },
      ],
    },
    {
      id: 'E2_q22', dim: 'E2',
      text: '喜欢一个不喜欢你的人，你会持续多久？',
      options: [
        { label: '知道没戏就撤，不在一棵树上吊死', value: 1 },
        { label: '多试几次，不行就算了', value: 2 },
        { label: '可能会坚持很久，即使知道没希望', value: 3 },
      ],
    },
    {
      id: 'E2_q23', dim: 'E2',
      text: '你想念一个人的时候，程度是？',
      options: [
        { label: '想一下就过去了，不影响生活', value: 1 },
        { label: '会时不时想起，有点小感伤', value: 2 },
        { label: '满脑子都是ta，吃什么都没味道', value: 3 },
      ],
    },
    {
      id: 'E2_q24', dim: 'E2',
      text: '恋爱中你能做到心里只有一个人吗？',
      options: [
        { label: '说实话不太确定，但我会尽量', value: 1 },
        { label: '大部分时候可以', value: 2 },
        { label: '当然，恋爱了就只看到ta一个人', value: 3 },
      ],
    },
    {
      id: 'E2_q25', dim: 'E2',
      text: '对象跟朋友出去但你更想跟ta待在一起，你会怎么选？',
      options: [
        { label: '没关系，各有各的社交', value: 1 },
        { label: '有点遗憾但支持ta去', value: 2 },
        { label: '我能跟着去吗……好吧，那我在家等你', value: 3 },
      ],
    },
    {
      id: 'E2_q26', dim: 'E2',
      text: '对象做了让你很受伤的事，但道歉了，你？',
      options: [
        { label: '道歉归道歉，触碰底线就不留情面', value: 1 },
        { label: '看什么事，小事可以大事需要时间', value: 2 },
        { label: '真心道歉了我就原谅，不记仇', value: 3 },
      ],
    },
    {
      id: 'E2_q27', dim: 'E2',
      text: '你会记得对象随口提到的小细节吗（比如"好想吃那家的蛋糕"）？',
      options: [
        { label: '不太会，我的记忆是金鱼级别的', value: 1 },
        { label: '有时会记住', value: 2 },
        { label: '当然记得，而且会找机会实现', value: 3 },
      ],
    },
    {
      id: 'E2_q28', dim: 'E2',
      text: '谈恋爱一段时间后，你的投入程度会？',
      options: [
        { label: '递减，新鲜感过了就淡了', value: 1 },
        { label: '基本稳定', value: 2 },
        { label: '越来越深，日久生情是真的', value: 3 },
      ],
    },
    {
      id: 'E2_q29', dim: 'E2',
      text: '你对另一半的小毛病（打呼噜/乱扔袜子）能容忍多久？',
      options: [
        { label: '容忍度很低，该说就说', value: 1 },
        { label: '初期能忍，久了可能会提', value: 2 },
        { label: '爱ta就爱ta的全部，包括小缺点', value: 3 },
      ],
    },
    {
      id: 'E2_q30', dim: 'E2',
      text: '看到一部很戳心的爱情电影/小说，你会？',
      options: [
        { label: '就那样吧，不怎么代入', value: 1 },
        { label: '有点触动', value: 2 },
        { label: '哭成狗，严重共情，想到了自己的感情', value: 3 },
      ],
    },
    {
      id: 'E2_q31', dim: 'E2',
      text: '你觉得"我喜欢你"这三个字应该什么时候说出口？',
      options: [
        { label: '能不说就不说，用行动证明', value: 1 },
        { label: '确认了感情再说', value: 2 },
        { label: '心动了就说！犹豫就会败北', value: 3 },
      ],
    },
    {
      id: 'E2_q32', dim: 'E2',
      text: '你想保护对象不受伤害的欲望有多强？',
      options: [
        { label: 'ta是成年人了，自己能处理', value: 1 },
        { label: '力所能及地保护', value: 2 },
        { label: '化身人形盾牌，谁敢欺负ta我跟谁急', value: 3 },
      ],
    },
    {
      id: 'E2_q33', dim: 'E2',
      text: '你会主动跟对象分享自己的秘密/过去吗？',
      options: [
        { label: '不会，有些东西就让它烂在肚子里', value: 1 },
        { label: '看情况，慢慢来', value: 2 },
        { label: '会，我想让ta了解完整的我', value: 3 },
      ],
    },
    {
      id: 'E2_q34', dim: 'E2',
      text: '感情出了问题（比如吵架冷战），你的处理方式是？',
      options: [
        { label: '冷处理，实在不行就算了', value: 1 },
        { label: '等冷静下来再沟通', value: 2 },
        { label: '主动找对方沟通，不能让问题过夜', value: 3 },
      ],
    },
    {
      id: 'E2_q35', dim: 'E2',
      text: '分手之后多久你会ready开始下一段？',
      options: [
        { label: '可能当天就能开始新的，人不能在一棵树上吊死', value: 1 },
        { label: '需要几周到几个月调整', value: 2 },
        { label: '很久很久，上一段没彻底放下之前不会开始', value: 3 },
      ],
    },
    {
      id: 'E2_q36', dim: 'E2',
      text: '你对爱情的信念更接近？',
      options: [
        { label: '爱情就那么回事，荷尔蒙作怪', value: 1 },
        { label: '相信爱情但也保持理性', value: 2 },
        { label: '相信真爱，相信灵魂伴侣，是浪漫战士', value: 3 },
      ],
    },
    {
      id: 'E2_q37', dim: 'E2',
      text: '你对确定关系的态度？多久才愿意official？',
      options: [
        { label: '不急不急，先相处看看再说', value: 1 },
        { label: '感觉差不多了就确认', value: 2 },
        { label: '确认感情了就想马上锁定，不喜欢暧昧期', value: 3 },
      ],
    },
    {
      id: 'E2_q38', dim: 'E2',
      text: '你在感情中会为了对方改变自己的习惯吗（比如早睡/戒烟）？',
      options: [
        { label: '我是什么样就什么样，为什么要因为别人改', value: 1 },
        { label: '合理的改变可以接受', value: 2 },
        { label: '愿意，为了ta我什么都能改', value: 3 },
      ],
    },
    {
      id: 'E2_q39', dim: 'E2',
      text: '你觉得自己在感情中更容易"动脑"还是"动心"？',
      options: [
        { label: '动脑，理性分析利弊才是正道', value: 1 },
        { label: '一半一半', value: 2 },
        { label: '动心，感情的事怎么能用脑子想', value: 3 },
      ],
    },
    {
      id: 'E2_q40', dim: 'E2',
      text: '回想过去的恋情，你觉得自己？',
      options: [
        { label: '投入不多，所以也没什么遗憾', value: 1 },
        { label: '投入了但有保留', value: 2 },
        { label: '每一段都倾尽全力，即使结局不好也不后悔', value: 3 },
      ],
    },
  ],

  // ═══════════ E3 边界与依赖 ═══════════
  E3: [
    {
      id: 'E3_q1', dim: 'E3',
      text: '恋爱后，对象非常黏人，你的真实感受？',
      options: [
        { label: '爽翻了，恨不得24小时绑一起', value: 1 },
        { label: '适度黏可以，别太过', value: 2 },
        { label: '窒息，我需要独立空间', value: 3 },
      ],
    },
    {
      id: 'E3_q2', dim: 'E3',
      text: '我在任何关系里都很重视个人空间',
      options: [
        { label: '我更喜欢黏在一起的感觉', value: 1 },
        { label: '看情况和对象', value: 2 },
        { label: '是的，我的领地神圣不可侵犯', value: 3 },
      ],
    },
    {
      id: 'E3_q3', dim: 'E3',
      text: '对象要你的手机密码、共享位置、绑定支付宝亲情账号，你？',
      options: [
        { label: '给给给，这才叫毫无保留的爱', value: 1 },
        { label: '密码可以商量，位置就免了', value: 2 },
        { label: '这三条全踩我底线了', value: 3 },
      ],
    },
    {
      id: 'E3_q4', dim: 'E3',
      text: '你理想中的恋爱模式是？',
      options: [
        { label: '连体婴儿模式：7x24在线', value: 1 },
        { label: '工作日各忙各的，周末约会', value: 2 },
        { label: '各过各的，想见面了再约', value: 3 },
      ],
    },
    {
      id: 'E3_q5', dim: 'E3',
      text: '周末对象想和你一起逛街，但你只想在家打游戏，你会？',
      options: [
        { label: '当然去啊，ta开心比什么都重要', value: 1 },
        { label: '商量一下，上午逛下午打', value: 2 },
        { label: '我今天想独处，你自己去吧', value: 3 },
      ],
    },
    {
      id: 'E3_q6', dim: 'E3',
      text: '一段感情里，你觉得两个人应该像？',
      options: [
        { label: '一对筷子，永远并排', value: 1 },
        { label: '两颗行星，有交汇也有各自轨道', value: 2 },
        { label: '两个独立的WiFi，偶尔蹭一下', value: 3 },
      ],
    },

    {
      id: 'E3_q7', dim: 'E3',
      text: '对象提议把两个人的工资卡交给一个人管，你？',
      options: [
        { label: '好耶！合体才是一家人', value: 1 },
        { label: '搞个公共账户可以，但私房钱得留点', value: 2 },
        { label: 'AA都嫌近，别碰我的钱', value: 3 },
      ],
    },
    {
      id: 'E3_q8', dim: 'E3',
      text: '一整天没见到对象，你的电量还剩多少？',
      options: [
        { label: '5%，马上关机，必须立刻充电（贴贴）', value: 1 },
        { label: '50%，想但还能撑', value: 2 },
        { label: '95%，独处就是我的快充', value: 3 },
      ],
    },
    {
      id: 'E3_q9', dim: 'E3',
      text: '对象要去和朋友唱K，没叫你，你？',
      options: [
        { label: '为什么不带我！DNA动了！', value: 1 },
        { label: '有点酸但能接受', value: 2 },
        { label: '太好了我终于可以一个人刷剧了', value: 3 },
      ],
    },
    {
      id: 'E3_q10', dim: 'E3',
      text: '你和对象因为"你需要太多/太少空间"吵起来了，你的内心OS？',
      options: [
        { label: '我就是需要你陪我，有错吗！', value: 1 },
        { label: '好吧我们坐下来谈谈边界问题', value: 2 },
        { label: '说得好，那我先回自己家冷静一下', value: 3 },
      ],
    },
    {
      id: 'E3_q11', dim: 'E3',
      text: '刚在一起三个月，对象说想搬来跟你同居，你？',
      options: [
        { label: '冲！同居才是恋爱的正确打开方式', value: 1 },
        { label: '是不是快了点，先观察观察', value: 2 },
        { label: '三个月？我三年都不一定准备好', value: 3 },
      ],
    },
    {
      id: 'E3_q12', dim: 'E3',
      text: '对象问你要社交媒体密码"证明信任"，你？',
      options: [
        { label: '给给给，爱就是完全透明的', value: 1 },
        { label: '可以偶尔看但别随便翻', value: 2 },
        { label: '密码是我的底线，免谈', value: 3 },
      ],
    },
    {
      id: 'E3_q13', dim: 'E3',
      text: '放假了你更想？',
      options: [
        { label: '和对象旅游！每一帧风景都要一起看', value: 1 },
        { label: '一起去但各自有自由活动时间', value: 2 },
        { label: '一个人背包旅行，solo才是真浪漫', value: 3 },
      ],
    },
    {
      id: 'E3_q14', dim: 'E3',
      text: '你发现对象偷偷看了你的日记/备忘录，你？',
      options: [
        { label: '没事，我的人生就是ta的连续剧', value: 1 },
        { label: '不太舒服但可以沟通一下', value: 2 },
        { label: '破大防了！这是我的精神领地啊', value: 3 },
      ],
    },
    {
      id: 'E3_q15', dim: 'E3',
      text: '买衣服、换发型这种事你会先问对象意见吗？',
      options: [
        { label: '必须的，连中午吃啥都要问ta', value: 1 },
        { label: '大事问，小事自己拿主意', value: 2 },
        { label: '我的身体我做主，问什么问', value: 3 },
      ],
    },
    {
      id: 'E3_q16', dim: 'E3',
      text: '你和对象的爱好完全不同，你的态度是？',
      options: [
        { label: '那我学ta的爱好，融合才是王道', value: 1 },
        { label: '各玩各的，偶尔互相体验一下', value: 2 },
        { label: '太好了，各有各的世界才健康', value: 3 },
      ],
    },
    {
      id: 'E3_q17', dim: 'E3',
      text: '上厕所关不关门这件事，你怎么看？',
      options: [
        { label: '老夫老妻了，门是啥', value: 1 },
        { label: '看阶段吧，刚在一起还是关', value: 2 },
        { label: '关到天荒地老，底线不可退', value: 3 },
      ],
    },
    {
      id: 'E3_q18', dim: 'E3',
      text: '对象拿起你的薯片吃了最后一片，你？',
      options: [
        { label: '我的就是ta的，开心就好', value: 1 },
        { label: '有点心痛但下次多买一包', value: 2 },
        { label: '动我薯片？这是宣战', value: 3 },
      ],
    },
    {
      id: 'E3_q19', dim: 'E3',
      text: '朋友聚会没邀请你对象，ta也不想去，你？',
      options: [
        { label: 'ta不去我也不去了，我们是一体的', value: 1 },
        { label: '去但会早点回来陪ta', value: 2 },
        { label: '正常去啊，社交不需要对象审批', value: 3 },
      ],
    },
    {
      id: 'E3_q20', dim: 'E3',
      text: '你理想的睡眠方式是？',
      options: [
        { label: '搂着对象睡，像考拉挂树上', value: 1 },
        { label: '同床但各睡各的区域', value: 2 },
        { label: '分被甚至分房，睡眠质量yyds', value: 3 },
      ],
    },
    {
      id: 'E3_q21', dim: 'E3',
      text: '早上起床你更喜欢？',
      options: [
        { label: '一起起床洗漱吃早餐，全套combo', value: 1 },
        { label: '各起各的，吃饭可以一起', value: 2 },
        { label: '别跟我说话，我醒来前不是人', value: 3 },
      ],
    },
    {
      id: 'E3_q22', dim: 'E3',
      text: '在家办公对象也在家，你理想的状态？',
      options: [
        { label: '同一张桌子面对面！心中有爱效率翻倍', value: 1 },
        { label: '同一个房间各干各的', value: 2 },
        { label: '关门隔开，我需要封闭式工位', value: 3 },
      ],
    },
    {
      id: 'E3_q23', dim: 'E3',
      text: '对象一小时没回消息，你发了几条催命连环call？',
      options: [
        { label: '至少5条外加2个语音1个视频', value: 1 },
        { label: '发一条"在干嘛"然后等', value: 2 },
        { label: '0条，ta有自己的事', value: 3 },
      ],
    },
    {
      id: 'E3_q24', dim: 'E3',
      text: '对象要求共享实时位置，你？',
      options: [
        { label: '好的！双向绑定更有安全感', value: 1 },
        { label: '出远门可以，日常免了', value: 2 },
        { label: '我又不是外卖骑手，不需要实时追踪', value: 3 },
      ],
    },
    {
      id: 'E3_q25', dim: 'E3',
      text: '对象碰了你的手办/化妆品/收藏品，你？',
      options: [
        { label: '没事，我的东西ta随便用', value: 1 },
        { label: '可以碰但请放回原位谢谢', value: 2 },
        { label: '触发领地防御机制，请立即放下', value: 3 },
      ],
    },
    {
      id: 'E3_q26', dim: 'E3',
      text: '心情emo的时候你更想？',
      options: [
        { label: '立刻找对象倾诉，ta是唯一的树洞', value: 1 },
        { label: '先自己消化一下再考虑说不说', value: 2 },
        { label: '一个人待着别来烦我', value: 3 },
      ],
    },
    {
      id: 'E3_q27', dim: 'E3',
      text: '过年回谁家这个世纪难题，你怎么看？',
      options: [
        { label: '当然一起行动，去哪家都行', value: 1 },
        { label: '轮流来或者一起协商', value: 2 },
        { label: '各回各家各找各妈，完美方案', value: 3 },
      ],
    },
    {
      id: 'E3_q28', dim: 'E3',
      text: '对象说"你应该多花点时间提升自己"，你？',
      options: [
        { label: 'ta说什么都对，马上改马上学', value: 1 },
        { label: '有道理我参考一下', value: 2 },
        { label: '我的人生我安排，谢谢关心', value: 3 },
      ],
    },
    {
      id: 'E3_q29', dim: 'E3',
      text: '恋爱后你还会坚持原来的社交圈吗？',
      options: [
        { label: '对象就是全世界，朋友随缘', value: 1 },
        { label: '保持但确实会减少一些', value: 2 },
        { label: '必须保持，恋爱不是社交替代品', value: 3 },
      ],
    },
    {
      id: 'E3_q30', dim: 'E3',
      text: '恋爱后你的社交媒体头像会变吗？',
      options: [
        { label: '情侣头像安排上，昭告天下', value: 1 },
        { label: '可能换但不一定是情侣款', value: 2 },
        { label: '还是我自己的，社媒是我的领地', value: 3 },
      ],
    },
    {
      id: 'E3_q31', dim: 'E3',
      text: '对象说"这个假期我想自己旅行"，你第一反应？',
      options: [
        { label: '为什么不带我！是不是不爱了', value: 1 },
        { label: '有点失落但能理解', value: 2 },
        { label: '好耶那我也安排自己的行程', value: 3 },
      ],
    },
    {
      id: 'E3_q32', dim: 'E3',
      text: '你跳槽/转行会先和对象商量吗？',
      options: [
        { label: '当然！ta的意见比boss还重要', value: 1 },
        { label: '会说一声但最终自己拍板', value: 2 },
        { label: '我的职业我做主，自己说了算', value: 3 },
      ],
    },
    {
      id: 'E3_q33', dim: 'E3',
      text: '体检报告出来了，你会第一时间给对象看吗？',
      options: [
        { label: '必须的，身体数据ta都要知道', value: 1 },
        { label: '有问题会说，没事就不提了', value: 2 },
        { label: '这是我的隐私，有需要我自己处理', value: 3 },
      ],
    },
    {
      id: 'E3_q34', dim: 'E3',
      text: '你在恋爱中的经济独立程度是？',
      options: [
        { label: '你的我的都是我们的，共享经济', value: 1 },
        { label: '大开销AA小钱不计较', value: 2 },
        { label: '财务完全独立，请勿越界', value: 3 },
      ],
    },
    {
      id: 'E3_q35', dim: 'E3',
      text: '你需要独立的创作/思考空间吗？',
      options: [
        { label: '不需要，对象在旁边更有灵感', value: 1 },
        { label: '偶尔需要但不是刚需', value: 2 },
        { label: '刚需！没独处空间我内耗到爆炸', value: 3 },
      ],
    },
    {
      id: 'E3_q36', dim: 'E3',
      text: '你在恋爱中的充电方式是？',
      options: [
        { label: '和对象黏在一起就是充电', value: 1 },
        { label: '两种都需要，看当天电量', value: 2 },
        { label: '独处才是我的充电宝，勿扰', value: 3 },
      ],
    },
    {
      id: 'E3_q37', dim: 'E3',
      text: '出差或旅行，你更喜欢？',
      options: [
        { label: '带上对象，走到哪黏到哪', value: 1 },
        { label: '看情况，短途solo长途一起', value: 2 },
        { label: '一个人上路，自由是最高信仰', value: 3 },
      ],
    },
    {
      id: 'E3_q38', dim: 'E3',
      text: '你和对象每天的聊天频率应该是？',
      options: [
        { label: '从早到晚不断线，已读不回=冷暴力', value: 1 },
        { label: '早安晚安加白天偶尔几句', value: 2 },
        { label: '有事说事没事各忙，效率至上', value: 3 },
      ],
    },
    {
      id: 'E3_q39', dim: 'E3',
      text: '你希望和对象共用日程表吗？',
      options: [
        { label: '必须的！行程同步才安心', value: 1 },
        { label: '重要日子同步就行', value: 2 },
        { label: '我的日程是最高机密', value: 3 },
      ],
    },
    {
      id: 'E3_q40', dim: 'E3',
      text: '你们共同朋友和各自朋友的理想比例？',
      options: [
        { label: '最好全是共同朋友，融合才是爱', value: 1 },
        { label: '有交集也有各自的圈子', value: 2 },
        { label: '朋友圈基本独立，偶尔联谊', value: 3 },
      ],
    },
  ],

  // ═══════════ A1 世界观倾向 ═══════════
  A1: [
    {
      id: 'A1_q1', dim: 'A1',
      text: '你相信大多数人是善良的吗？',
      options: [
        { label: '坏人比痔疮还多', value: 1 },
        { label: '好坏参半吧', value: 2 },
        { label: '是的，我愿意相信善意更多', value: 3 },
      ],
    },
    {
      id: 'A1_q2', dim: 'A1',
      text: '一个萌到犯规的小女孩蹦蹦跳跳走过来给你一根棒棒糖，你？',
      options: [
        { label: '新型诈骗？赶紧跑', value: 1 },
        { label: '一脸懵逼.jpg', value: 2 },
        { label: '呜呜好可爱！我收了！', value: 3 },
      ],
    },
    {
      id: 'A1_q3', dim: 'A1',
      text: '路上有人摔倒了，你的第一反应？',
      options: [
        { label: '碰瓷预警，保持三米安全距离', value: 1 },
        { label: '先拍个视频取证再考虑扶不扶', value: 2 },
        { label: '先过去看看情况', value: 3 },
      ],
    },
    {
      id: 'A1_q4', dim: 'A1',
      text: '"人不为己天诛地灭"这句话你怎么看？',
      options: [
        { label: '至理名言，早该写进课本', value: 1 },
        { label: '有道理但太绝对了', value: 2 },
        { label: '不同意，很多人是真心利他的', value: 3 },
      ],
    },
    {
      id: 'A1_q5', dim: 'A1',
      text: '陌生人在地铁上突然对你笑了一下，你？',
      options: [
        { label: '我脸上有东西？还是要偷我手机？', value: 1 },
        { label: '不知道什么意思但先回个微笑', value: 2 },
        { label: '今天也是被温暖到的一天', value: 3 },
      ],
    },
    {
      id: 'A1_q6', dim: 'A1',
      text: '你对"互联网上没有好人"这句话的态度是？',
      options: [
        { label: '事实，网线那头都是魔鬼', value: 1 },
        { label: '有好有坏，小心为上', value: 2 },
        { label: '不认同，网上也遇到过很暖的人', value: 3 },
      ],
    },

    {
      id: 'A1_q7', dim: 'A1',
      text: '你觉得政府/制度在替老百姓着想吗？',
      options: [
        { label: '别搞笑了，韭菜的命罢了', value: 1 },
        { label: '有些地方行有些地方不行', value: 2 },
        { label: '总体在进步，我愿意给点信心', value: 3 },
      ],
    },
    {
      id: 'A1_q8', dim: 'A1',
      text: '有人深深伤害过你，你能原谅ta吗？',
      options: [
        { label: '不能，我的仇恨值比boss还高', value: 1 },
        { label: '得看伤害程度', value: 2 },
        { label: '能放下，仇恨太累了', value: 3 },
      ],
    },
    {
      id: 'A1_q9', dim: 'A1',
      text: '你觉得这个世界有"正义"这回事吗？',
      options: [
        { label: '正义？只有利益和权力', value: 1 },
        { label: '有但经常迟到', value: 2 },
        { label: '有的，虽然不完美但一直在', value: 3 },
      ],
    },
    {
      id: 'A1_q10', dim: 'A1',
      text: '一个人成功了，你觉得主要靠什么？',
      options: [
        { label: '投胎技术，其他都是扯淡', value: 1 },
        { label: '运气和努力各占一半', value: 2 },
        { label: '努力是第一因素，运气是加成', value: 3 },
      ],
    },
    {
      id: 'A1_q11', dim: 'A1',
      text: '刷到一条震惊全网的新闻，你第一反应？',
      options: [
        { label: '又在带节奏，媒体话术罢了', value: 1 },
        { label: '先看看多方信源再判断', value: 2 },
        { label: '虽然要理性但我选择先相信', value: 3 },
      ],
    },
    {
      id: 'A1_q12', dim: 'A1',
      text: '朋友给你讲了一个听起来很离谱的阴谋论，你？',
      options: [
        { label: '细说细说，这世界水深得很', value: 1 },
        { label: '有点意思但不全信', value: 2 },
        { label: '这也太离谱了吧，奥卡姆剃刀了解一下', value: 3 },
      ],
    },
    {
      id: 'A1_q13', dim: 'A1',
      text: '一个曾经背叛你的人说想重新做朋友，你？',
      options: [
        { label: '你当我记忆只有7秒？再见', value: 1 },
        { label: '保持距离观察一段时间', value: 2 },
        { label: '人会变的，愿意给个机会', value: 3 },
      ],
    },
    {
      id: 'A1_q14', dim: 'A1',
      text: '你觉得人类整体在变好还是变差？',
      options: [
        { label: '一代不如一代，世风日下', value: 1 },
        { label: '有好有坏，波动前进吧', value: 2 },
        { label: '整体在进步，别被负面新闻绑架', value: 3 },
      ],
    },
    {
      id: 'A1_q15', dim: 'A1',
      text: '有人在网上发起众筹说家人生病了，你？',
      options: [
        { label: '十个有九个是骗子，划走', value: 1 },
        { label: '如果有可靠平台背书会考虑', value: 2 },
        { label: '先捐一点，万一是真的呢', value: 3 },
      ],
    },
    {
      id: 'A1_q16', dim: 'A1',
      text: '你觉得大企业会真心做公益吗？',
      options: [
        { label: '做公益？那叫洗白+避税', value: 1 },
        { label: '动机不纯但客观上有帮助', value: 2 },
        { label: '有些企业是真心的，不能一棍子打死', value: 3 },
      ],
    },
    {
      id: 'A1_q17', dim: 'A1',
      text: '科学家/专家说的话你信几分？',
      options: [
        { label: '专家？砖家！谁给钱替谁说话', value: 1 },
        { label: '参考但保持独立判断', value: 2 },
        { label: '专业的人做专业的事，我基本信', value: 3 },
      ],
    },
    {
      id: 'A1_q18', dim: 'A1',
      text: '你对"冥冥之中自有天意"这类说法怎么看？',
      options: [
        { label: '扯淡，命运就是随机事件', value: 1 },
        { label: '不太信但偶尔觉得巧合太多了', value: 2 },
        { label: '我相信某种更高的秩序存在', value: 3 },
      ],
    },
    {
      id: 'A1_q19', dim: 'A1',
      text: '你觉得"善有善报恶有恶报"靠谱吗？',
      options: [
        { label: '不靠谱，好人没好报的例子太多了', value: 1 },
        { label: '不一定但愿意这样相信', value: 2 },
        { label: '长远来看是这样的，因果不虚', value: 3 },
      ],
    },
    {
      id: 'A1_q20', dim: 'A1',
      text: '你觉得人类100年后会更好还是更惨？',
      options: [
        { label: '大概率完蛋，资源耗尽或者AI统治', value: 1 },
        { label: '不好说，变数太多', value: 2 },
        { label: '会更好，人类一直在解决问题', value: 3 },
      ],
    },
    {
      id: 'A1_q21', dim: 'A1',
      text: '有人跟你说"一起为环保做点什么"，你？',
      options: [
        { label: '环保是资本家的游戏，关我啥事', value: 1 },
        { label: '理念支持但行动看心情', value: 2 },
        { label: '好啊，从小事做起也是贡献', value: 3 },
      ],
    },
    {
      id: 'A1_q22', dim: 'A1',
      text: '你觉得社会对大多数人是公平的吗？',
      options: [
        { label: '公平？只对有钱人公平', value: 1 },
        { label: '不完美但在努力', value: 2 },
        { label: '大体公平，个人努力能改变命运', value: 3 },
      ],
    },
    {
      id: 'A1_q23', dim: 'A1',
      text: '看到富人和穷人的差距越来越大，你？',
      options: [
        { label: '这个世界就是个巨大的不公平', value: 1 },
        { label: '有问题但也没那么绝望', value: 2 },
        { label: '差距会缩小的，社会在调节', value: 3 },
      ],
    },
    {
      id: 'A1_q24', dim: 'A1',
      text: '你觉得现在的教育体系靠谱吗？',
      options: [
        { label: '批量生产螺丝钉，不靠谱', value: 1 },
        { label: '有问题但也有可取之处', value: 2 },
        { label: '整体不错，个人也要主动学习', value: 3 },
      ],
    },
    {
      id: 'A1_q25', dim: 'A1',
      text: '生了大病你会信任医院还是自己查百度？',
      options: [
        { label: '医院就是赚钱机器，先自己研究', value: 1 },
        { label: '看医生但也会自己做功课', value: 2 },
        { label: '专业的事交给医生，我信专业', value: 3 },
      ],
    },
    {
      id: 'A1_q26', dim: 'A1',
      text: '你刷社交媒体看到的信息，有几成是真的？',
      options: [
        { label: '三成都不到，全是营销号编的', value: 1 },
        { label: '真假掺半，需要自己甄别', value: 2 },
        { label: '大部分可信，但也要独立思考', value: 3 },
      ],
    },
    {
      id: 'A1_q27', dim: 'A1',
      text: '有人说"历史是胜利者书写的"，你同意吗？',
      options: [
        { label: '完全同意，历史就是一部洗脑教材', value: 1 },
        { label: '有道理但也不至于全是假的', value: 2 },
        { label: '真相会浮出水面的，历史经得起考验', value: 3 },
      ],
    },
    {
      id: 'A1_q28', dim: 'A1',
      text: '你对自己国家/城市的文化氛围感觉如何？',
      options: [
        { label: '一言难尽，精神荒漠', value: 1 },
        { label: '有些方面好有些差', value: 2 },
        { label: '挺好的，有独特的魅力', value: 3 },
      ],
    },
    {
      id: 'A1_q29', dim: 'A1',
      text: '你觉得科技会让人类生活更好还是更糟？',
      options: [
        { label: '更糟，AI要抢我饭碗了，赛博朋克不远了', value: 1 },
        { label: '双刃剑，看怎么用', value: 2 },
        { label: '更好，技术进步改善生活是主旋律', value: 3 },
      ],
    },
    {
      id: 'A1_q30', dim: 'A1',
      text: '你觉得人的本性可以改变吗？',
      options: [
        { label: '江山易改本性难移，DNA决定一切', value: 1 },
        { label: '可以微调但核心不太变', value: 2 },
        { label: '当然可以，人是有成长能力的', value: 3 },
      ],
    },
    {
      id: 'A1_q31', dim: 'A1',
      text: '一个人走夜路碰到陌生人，你的警惕等级？',
      options: [
        { label: 'SSR级，已经在脑内演练逃跑路线了', value: 1 },
        { label: '有点紧张但保持冷静', value: 2 },
        { label: '正常走路，不是所有陌生人都危险', value: 3 },
      ],
    },
    {
      id: 'A1_q32', dim: 'A1',
      text: '你觉得"一代不如一代"这种说法对吗？',
      options: [
        { label: '对，现在的年轻人太拉了', value: 1 },
        { label: '每代人有每代人的问题', value: 2 },
        { label: '不对，每一代都在解决新的问题', value: 3 },
      ],
    },
    {
      id: 'A1_q33', dim: 'A1',
      text: '你相信这个社会是"努力就能出头"的吗？',
      options: [
        { label: '别做梦了，阶层早就固化了', value: 1 },
        { label: '努力有用但不是唯一因素', value: 2 },
        { label: '相信，虽然不是100%但大概率有回报', value: 3 },
      ],
    },
    {
      id: 'A1_q34', dim: 'A1',
      text: '你觉得朋友之间的友谊是真诚的吗？',
      options: [
        { label: '都是利益交换，真朋友不存在', value: 1 },
        { label: '少数是真的，大部分是社交需要', value: 2 },
        { label: '信任我的朋友，真诚是友谊的基础', value: 3 },
      ],
    },
    {
      id: 'A1_q35', dim: 'A1',
      text: '你觉得爱情是真实存在的还是荷尔蒙骗局？',
      options: [
        { label: '荷尔蒙+多巴胺，科学已经解释了', value: 1 },
        { label: '有化学成分但不只是化学成分', value: 2 },
        { label: '爱情是真实的，超越了化学反应', value: 3 },
      ],
    },
    {
      id: 'A1_q36', dim: 'A1',
      text: '你怎么看"努力工作"这件事？',
      options: [
        { label: '都是被资本PUA出来的，谁想卷啊', value: 1 },
        { label: '有的人确实热爱工作有的只是被迫', value: 2 },
        { label: '勤劳是美德，靠双手创造价值很棒', value: 3 },
      ],
    },
    {
      id: 'A1_q37', dim: 'A1',
      text: '科学界说"地球在变暖/疫苗是安全的"，你信吗？',
      options: [
        { label: '科学家也会被收买，不能全信', value: 1 },
        { label: '大概率是对的但保持质疑', value: 2 },
        { label: '科学共识值得信赖，我尊重证据', value: 3 },
      ],
    },
    {
      id: 'A1_q38', dim: 'A1',
      text: '你信任管理你的那些领导吗？',
      options: [
        { label: '当官的没一个好东西', value: 1 },
        { label: '有好有坏，不能一概而论', value: 2 },
        { label: '大部分是在认真做事的', value: 3 },
      ],
    },
    {
      id: 'A1_q39', dim: 'A1',
      text: '你觉得你住的社区的邻里关系怎么样？',
      options: [
        { label: '老死不相往来，隔壁住谁都不知道', value: 1 },
        { label: '见面点头但不深交', value: 2 },
        { label: '挺好的，有互帮互助的氛围', value: 3 },
      ],
    },
    {
      id: 'A1_q40', dim: 'A1',
      text: '总结一下，你对这个世界的整体信任度？',
      options: [
        { label: '信任度为负，这个世界不值得', value: 1 },
        { label: '50分，谨慎乐观', value: 2 },
        { label: '80分以上，世界虽然有问题但值得热爱', value: 3 },
      ],
    },
  ],

  // ═══════════ A2 规则与灵活度 ═══════════
  A2: [
    {
      id: 'A2_q1', dim: 'A2',
      text: '快考试了必须上晚自习，但男/女神约你打游戏，怎么办？',
      options: [
        { label: '翘了翘了，游戏要紧（bushi', value: 1 },
        { label: '请个假？折中一下', value: 2 },
        { label: '都快考试了还打什么游戏', value: 3 },
      ],
    },
    {
      id: 'A2_q2', dim: 'A2',
      text: '我喜欢打破常规，不喜欢被规则束缚',
      options: [
        { label: '认同，规则就是用来打破的', value: 1 },
        { label: '看什么规则', value: 2 },
        { label: '不认同，没有规矩不成方圆', value: 3 },
      ],
    },
    {
      id: 'A2_q3', dim: 'A2',
      text: '导航提示可以走一条禁止左转的小路，能省15分钟，你？',
      options: [
        { label: '没有摄像头就是合法的（不是', value: 1 },
        { label: '看有没有交警再决定', value: 2 },
        { label: '规矩就是规矩，老实走大路', value: 3 },
      ],
    },
    {
      id: 'A2_q4', dim: 'A2',
      text: '领导定了个你觉得很蠢的流程，你会？',
      options: [
        { label: '暗中用自己的方式做，领导不盯着就没事', value: 1 },
        { label: '先试试领导的，不行再调整', value: 2 },
        { label: '按流程走，毕竟领导负责', value: 3 },
      ],
    },
    {
      id: 'A2_q5', dim: 'A2',
      text: '你的座右铭更接近哪个？',
      options: [
        { label: '此路是我开，此树是我栽', value: 1 },
        { label: '该灵活的灵活，该规矩的规矩', value: 2 },
        { label: '不以规矩，不能成方圆', value: 3 },
      ],
    },
    {
      id: 'A2_q6', dim: 'A2',
      text: '排队买奶茶，前面有个空隙可以插队，而且没人会发现，你？',
      options: [
        { label: '溜过去，时间就是金钱', value: 1 },
        { label: '纠结三秒还是老实排着了', value: 2 },
        { label: '不会，插队是不对的', value: 3 },
      ],
    },

    {
      id: 'A2_q7', dim: 'A2',
      text: '朋友最近发胖了问你"我胖了吗？"你？',
      options: [
        { label: '善意的谎言了解一下："没有没有"', value: 1 },
        { label: '嗯……稍微圆润了一点？', value: 2 },
        { label: '实话实说，虽然残忍但诚实', value: 3 },
      ],
    },
    {
      id: 'A2_q8', dim: 'A2',
      text: '超市收银员多找了你50块钱，你？',
      options: [
        { label: '当没发现，今天运气真好', value: 1 },
        { label: '纠结一下……算了还是还回去吧', value: 2 },
        { label: '立刻指出来还给人家', value: 3 },
      ],
    },
    {
      id: 'A2_q9', dim: 'A2',
      text: '报销或报税的时候遇到灰色地带，你？',
      options: [
        { label: '能多报就多报，不薅白不薅', value: 1 },
        { label: '稍微打点擦边球但不过分', value: 2 },
        { label: '严格按规定来，不给自己留隐患', value: 3 },
      ],
    },
    {
      id: 'A2_q10', dim: 'A2',
      text: '关于看盗版电影/音乐这件事，你？',
      options: [
        { label: '盗版yyds，白嫖使我快乐', value: 1 },
        { label: '有条件付费，没条件……你懂的', value: 2 },
        { label: '坚持正版，创作者值得被尊重', value: 3 },
      ],
    },
    {
      id: 'A2_q11', dim: 'A2',
      text: '朋友被领导冤枉了很委屈，你能帮忙作证但要得罪领导，你？',
      options: [
        { label: '当然帮！规则是规则但人情更重要', value: 1 },
        { label: '想想怎么两边都不得罪', value: 2 },
        { label: '如实说，但走正规渠道反映', value: 3 },
      ],
    },
    {
      id: 'A2_q12', dim: 'A2',
      text: '停车费到期了但你还需要5分钟，你？',
      options: [
        { label: '5分钟而已，赌一把不会被贴条', value: 1 },
        { label: '快速搞定然后走', value: 2 },
        { label: '先去续费，规则就是规则', value: 3 },
      ],
    },
    {
      id: 'A2_q13', dim: 'A2',
      text: '凌晨3点路口没人也没车，红灯，你走路过马路会？',
      options: [
        { label: '直接走，等红灯的是NPC', value: 1 },
        { label: '左右看看没车再走', value: 2 },
        { label: '乖乖等绿灯，规则不分时间', value: 3 },
      ],
    },
    {
      id: 'A2_q14', dim: 'A2',
      text: '公司要求穿正装但你觉得很不舒服，你？',
      options: [
        { label: '穿自己舒服的，领导不说就当没这规定', value: 1 },
        { label: '打点折扣穿个商务休闲', value: 2 },
        { label: '规定就是规定，穿呗', value: 3 },
      ],
    },
    {
      id: 'A2_q15', dim: 'A2',
      text: '电影院里偷偷带了外面买的零食进去，你觉得？',
      options: [
        { label: '正常操作，影院零食也太贵了', value: 1 },
        { label: '偶尔为之不算大问题', value: 2 },
        { label: '不太好吧，人家有规定的', value: 3 },
      ],
    },
    {
      id: 'A2_q16', dim: 'A2',
      text: '高速公路上限速120但路很空，你？',
      options: [
        { label: '开到150，限速是给新手设的', value: 1 },
        { label: '稍微超一点130左右', value: 2 },
        { label: '120就是120，安全第一', value: 3 },
      ],
    },
    {
      id: 'A2_q17', dim: 'A2',
      text: '考试中同桌问你"这道题怎么写"，你？',
      options: [
        { label: '直接给答案，兄弟有难拔刀相助', value: 1 },
        { label: '纠结一下给个提示', value: 2 },
        { label: '不行，考试作弊我不干', value: 3 },
      ],
    },
    {
      id: 'A2_q18', dim: 'A2',
      text: '一家人共用一个视频会员账号，你觉得？',
      options: [
        { label: '再拉几个朋友一起用，多多益善', value: 1 },
        { label: '家人用可以，别太离谱', value: 2 },
        { label: '一人一个号才符合用户协议', value: 3 },
      ],
    },
    {
      id: 'A2_q19', dim: 'A2',
      text: '有张优惠券过期了但店员没注意，你？',
      options: [
        { label: '闷声发大财，用了再说', value: 1 },
        { label: '有点心虚但还是用了', value: 2 },
        { label: '告诉店员过期了，不占这便宜', value: 3 },
      ],
    },
    {
      id: 'A2_q20', dim: 'A2',
      text: '上班用公司电脑处理点私事（交水电费、买东西），你？',
      options: [
        { label: '公司电脑本来就是我的第二台私人电脑', value: 1 },
        { label: '偶尔快速处理一下不影响工作', value: 2 },
        { label: '公私分明，私事用自己手机', value: 3 },
      ],
    },
    {
      id: 'A2_q21', dim: 'A2',
      text: '领导在开一个无聊到爆的会，你？',
      options: [
        { label: '光明正大摸鱼，反正也没人看', value: 1 },
        { label: '装作在记笔记实际在神游', value: 2 },
        { label: '认真听，毕竟是工作', value: 3 },
      ],
    },
    {
      id: 'A2_q22', dim: 'A2',
      text: '公司的便签纸/笔/胶带顺手带回家了，你觉得？',
      options: [
        { label: '这不叫偷叫转移使用场景', value: 1 },
        { label: '小东西应该没人在意吧', value: 2 },
        { label: '不拿，公司的东西是公司的', value: 3 },
      ],
    },
    {
      id: 'A2_q23', dim: 'A2',
      text: '地铁上吃早餐，有规定不让但你赶时间，你？',
      options: [
        { label: '吃，又不是在吃火锅', value: 1 },
        { label: '偷偷吃尽量不让人看到', value: 2 },
        { label: '下车再吃，规定是规定', value: 3 },
      ],
    },
    {
      id: 'A2_q24', dim: 'A2',
      text: '你用的某个软件其实需要付费许可证，你？',
      options: [
        { label: '破解版yyds，付费是不可能付费的', value: 1 },
        { label: '先用着赚钱了再买正版', value: 2 },
        { label: '买正版，尊重知识产权', value: 3 },
      ],
    },
    {
      id: 'A2_q25', dim: 'A2',
      text: '网购了个东西用了一个月想退货（还在退货期），你？',
      options: [
        { label: '用完退，消费者的权利嘛', value: 1 },
        { label: '不太好意思但如果真不满意就退', value: 2 },
        { label: '用了就不退了，做人要厚道', value: 3 },
      ],
    },
    {
      id: 'A2_q26', dim: 'A2',
      text: '餐厅规定最低消费但你只想喝杯咖啡，你？',
      options: [
        { label: '坐下来说"就要一杯"，管他规定', value: 1 },
        { label: '凑个最低消费或者换家店', value: 2 },
        { label: '既然有规定就遵守，去别处', value: 3 },
      ],
    },
    {
      id: 'A2_q27', dim: 'A2',
      text: '晚上11点了你想嗨歌，但隔壁邻居可能已经睡了，你？',
      options: [
        { label: '开唱！人生苦短及时行乐', value: 1 },
        { label: '戴耳机小声唱', value: 2 },
        { label: '不了，十点以后不制造噪音是基本素质', value: 3 },
      ],
    },
    {
      id: 'A2_q28', dim: 'A2',
      text: '小区规定不让养大型犬，但你特别想养哈士奇，你？',
      options: [
        { label: '养！大不了被发现再说', value: 1 },
        { label: '先了解一下执行力度', value: 2 },
        { label: '规定不让就不养，换个小型犬', value: 3 },
      ],
    },
    {
      id: 'A2_q29', dim: 'A2',
      text: '图书馆借的书超期了三天，你？',
      options: [
        { label: '继续看完再还，反正罚款也不多', value: 1 },
        { label: '赶紧还，罚款认了', value: 2 },
        { label: '从不超期，到期前一定还', value: 3 },
      ],
    },
    {
      id: 'A2_q30', dim: 'A2',
      text: '健身房用完器械，你会擦汗渍吗？',
      options: [
        { label: '擦什么擦，下一个人自己擦', value: 1 },
        { label: '如果旁边有毛巾就擦一下', value: 2 },
        { label: '必须擦，基本礼貌', value: 3 },
      ],
    },
    {
      id: 'A2_q31', dim: 'A2',
      text: '急着接人就停一分钟，面前是残疾人车位，你？',
      options: [
        { label: '一分钟而已停了再说', value: 1 },
        { label: '犹豫一下还是找别的地方', value: 2 },
        { label: '绝对不停，这是别人的专属位', value: 3 },
      ],
    },
    {
      id: 'A2_q32', dim: 'A2',
      text: '禁烟区没人管，你的烟瘾犯了，你？',
      options: [
        { label: '点一根，没人管就是默许', value: 1 },
        { label: '找个角落偷偷抽', value: 2 },
        { label: '忍着，去指定区域再抽', value: 3 },
      ],
    },
    {
      id: 'A2_q33', dim: 'A2',
      text: '坐后排不系安全带，你？',
      options: [
        { label: '后排谁系啊，又不查', value: 1 },
        { label: '高速系市区看心情', value: 2 },
        { label: '不管前后排都系，安全无小事', value: 3 },
      ],
    },
    {
      id: 'A2_q34', dim: 'A2',
      text: '凌晨3点空无一人的十字路口红灯，你开车会？',
      options: [
        { label: '直接过，这个时间等灯是NPC行为', value: 1 },
        { label: '确认安全后慢速通过', value: 2 },
        { label: '等绿灯，摄像头可能在看着呢', value: 3 },
      ],
    },
    {
      id: 'A2_q35', dim: 'A2',
      text: '某些网站/app在你这被限制了，你会用工具绕过吗？',
      options: [
        { label: '当然，互联网应该是自由的', value: 1 },
        { label: '看需要，工作需要就用', value: 2 },
        { label: '有限制自然有限制的道理', value: 3 },
      ],
    },
    {
      id: 'A2_q36', dim: 'A2',
      text: '网站问你"是否年满18岁"，你实际未满/不确定，你？',
      options: [
        { label: '直接点是，这也能拦住人？', value: 1 },
        { label: '犹豫一下还是点了', value: 2 },
        { label: '未满就点否，实事求是', value: 3 },
      ],
    },
    {
      id: 'A2_q37', dim: 'A2',
      text: '注册账号时那个超长的用户协议，你？',
      options: [
        { label: '直接拉到底勾选，谁看那个', value: 1 },
        { label: '扫一眼重点条款', value: 2 },
        { label: '认真看完再勾选', value: 3 },
      ],
    },
    {
      id: 'A2_q38', dim: 'A2',
      text: '你对"垃圾分类"这件事？',
      options: [
        { label: '什么都往一个袋子里塞，懒得分', value: 1 },
        { label: '有监督的时候分分', value: 2 },
        { label: '每次都认真分类', value: 3 },
      ],
    },
    {
      id: 'A2_q39', dim: 'A2',
      text: '疫情/流感期间的防控规定，你？',
      options: [
        { label: '小题大做，该怎么过怎么过', value: 1 },
        { label: '重要的遵守细枝末节随缘', value: 2 },
        { label: '严格执行，公共卫生是大事', value: 3 },
      ],
    },
    {
      id: 'A2_q40', dim: 'A2',
      text: '工地/实验室安全规程很繁琐，你？',
      options: [
        { label: '差不多就行了，每条都遵守效率太低', value: 1 },
        { label: '重要的做不重要的省略', value: 2 },
        { label: '每一条都严格执行，安全没有捷径', value: 3 },
      ],
    },
  ],

  // ═══════════ A3 人生意义感 ═══════════
  A3: [
    {
      id: 'A3_q1', dim: 'A3',
      text: '我做事通常有明确的目标',
      options: [
        { label: '目标？我连今天吃什么都不知道', value: 1 },
        { label: '有时有，有时随缘', value: 2 },
        { label: '是的，我是目标驱动型选手', value: 3 },
      ],
    },
    {
      id: 'A3_q2', dim: 'A3',
      text: '人生有什么意义？我们不过是被激素控制的碳基生物，饿了就吃困了就睡，跟动物没什么区别。',
      options: [
        { label: '你说得对，我被你说服了', value: 1 },
        { label: '有点道理但不完全对', value: 2 },
        { label: '放屁，人不一样', value: 3 },
      ],
    },
    {
      id: 'A3_q3', dim: 'A3',
      text: '给你一个亿，但此生不能再有任何目标和追求，你？',
      options: [
        { label: '成交！我本来就没什么追求', value: 1 },
        { label: '好纠结……', value: 2 },
        { label: '不换，没有目标的人生是行尸走肉', value: 3 },
      ],
    },
    {
      id: 'A3_q4', dim: 'A3',
      text: '"活着就是为了吃饭睡觉打豆豆"你觉得？',
      options: [
        { label: '真理！谁反对我跟谁急', value: 1 },
        { label: '不完全是，但也差不多', value: 2 },
        { label: '不同意，人应该有更高的追求', value: 3 },
      ],
    },
    {
      id: 'A3_q5', dim: 'A3',
      text: '如果人生有个进度条，你觉得你现在？',
      options: [
        { label: '进度条？我连游戏都没启动', value: 1 },
        { label: '大概在加载中吧', value: 2 },
        { label: '已经在推主线了', value: 3 },
      ],
    },
    {
      id: 'A3_q6', dim: 'A3',
      text: '你五年后会在哪里？',
      options: [
        { label: '在哪里不重要，活着就行', value: 1 },
        { label: '没想过那么远', value: 2 },
        { label: '我有个大致的规划', value: 3 },
      ],
    },

    {
      id: 'A3_q7', dim: 'A3',
      text: '你希望死后被人记住吗？',
      options: [
        { label: '被记住？我活着都没人记得', value: 1 },
        { label: '被至亲记得就够了', value: 2 },
        { label: '想留下点什么，哪怕很小', value: 3 },
      ],
    },
    {
      id: 'A3_q8', dim: 'A3',
      text: '"吃苦是有意义的"这句话你信吗？',
      options: [
        { label: '不信，苦就是苦，别PUA我', value: 1 },
        { label: '有时候苦完回头看确实成长了', value: 2 },
        { label: '信，苦难是最好的老师', value: 3 },
      ],
    },
    {
      id: 'A3_q9', dim: 'A3',
      text: '你有没有那种"非做不可"的创作冲动？',
      options: [
        { label: '创作？我连朋友圈都懒得发', value: 1 },
        { label: '偶尔灵感来了会写写画画', value: 2 },
        { label: '有！不创作我就不完整', value: 3 },
      ],
    },
    {
      id: 'A3_q10', dim: 'A3',
      text: '想到"有一天我会死"，你的反应是？',
      options: [
        { label: '那更要及时行乐，躺平享受当下', value: 1 },
        { label: '有点慌但不想多想', value: 2 },
        { label: '所以更要抓紧时间做有意义的事', value: 3 },
      ],
    },
    {
      id: 'A3_q11', dim: 'A3',
      text: '你有没有一种"我被赋予了某种使命"的感觉？',
      options: [
        { label: '我的使命就是活着别太丢人', value: 1 },
        { label: '偶尔有这种直觉', value: 2 },
        { label: '有，虽然说不清但能感受到', value: 3 },
      ],
    },
    {
      id: 'A3_q12', dim: 'A3',
      text: '工作对你来说更接近？',
      options: [
        { label: '卖命换钱的交易，仅此而已', value: 1 },
        { label: '有些时候能获得成就感', value: 2 },
        { label: '实现价值的途径，钱是副产品', value: 3 },
      ],
    },
    {
      id: 'A3_q13', dim: 'A3',
      text: '你有没有想过"如果我能改变一件事让世界变好"？',
      options: [
        { label: '我连自己的生活都改变不了', value: 1 },
        { label: '想过但感觉太远了', value: 2 },
        { label: '有！而且我在用自己的方式努力', value: 3 },
      ],
    },
    {
      id: 'A3_q14', dim: 'A3',
      text: '你对"活到老学到老"这句话？',
      options: [
        { label: '毕业了还要学？我拒绝', value: 1 },
        { label: '感兴趣的东西会学学', value: 2 },
        { label: '认同，学习本身就是目的', value: 3 },
      ],
    },
    {
      id: 'A3_q15', dim: 'A3',
      text: '你有没有认真思考过哲学/信仰这类终极问题？',
      options: [
        { label: '想这些不如想想晚饭吃什么', value: 1 },
        { label: '偶尔深夜emo的时候会想', value: 2 },
        { label: '经常思考，这是我精神世界的一部分', value: 3 },
      ],
    },
    {
      id: 'A3_q16', dim: 'A3',
      text: '你更倾向于"创造内容"还是"消费内容"？',
      options: [
        { label: '我是纯消费者，刷就完事了', value: 1 },
        { label: '主要消费偶尔创作', value: 2 },
        { label: '创造让我更有价值感', value: 3 },
      ],
    },
    {
      id: 'A3_q17', dim: 'A3',
      text: '如果有机会当别人的导师/带新人，你？',
      options: [
        { label: '我自己还是个菜鸟呢，带什么徒弟', value: 1 },
        { label: '如果被安排了会做的', value: 2 },
        { label: '很乐意！传承知识让我有成就感', value: 3 },
      ],
    },
    {
      id: 'A3_q18', dim: 'A3',
      text: '你对"冒险/探索未知"这件事？',
      options: [
        { label: '在家躺着是最好的探索——探索沙发极限', value: 1 },
        { label: '偶尔尝试新鲜事物', value: 2 },
        { label: '人生就是一场冒险，不探索白来了', value: 3 },
      ],
    },
    {
      id: 'A3_q19', dim: 'A3',
      text: '恋爱/亲密关系在你人生中的权重是？',
      options: [
        { label: '可有可无，一个人也能活', value: 1 },
        { label: '重要但不是全部', value: 2 },
        { label: '非常重要，是人生意义的核心之一', value: 3 },
      ],
    },
    {
      id: 'A3_q20', dim: 'A3',
      text: '你有"成为更好的自己"的驱动力吗？',
      options: [
        { label: '现在的我就挺好，别内卷我', value: 1 },
        { label: '有时候有有时候摆烂', value: 2 },
        { label: '一直有，成长是永恒的课题', value: 3 },
      ],
    },
    {
      id: 'A3_q21', dim: 'A3',
      text: '你觉得保护环境/可持续发展跟你有关系吗？',
      options: [
        { label: '等地球毁灭我都不一定活着，关我啥事', value: 1 },
        { label: '有关系但我能做的有限', value: 2 },
        { label: '当然有关，每个人都有责任', value: 3 },
      ],
    },
    {
      id: 'A3_q22', dim: 'A3',
      text: '你有没有"必须用某种方式表达自己"的冲动？',
      options: [
        { label: '表达什么？我是互联网静默用户', value: 1 },
        { label: '有时候想写点什么但很快就放弃了', value: 2 },
        { label: '有！写作/画画/音乐是我的出口', value: 3 },
      ],
    },
    {
      id: 'A3_q23', dim: 'A3',
      text: '你有没有想过"建立一个社区/组织"？',
      options: [
        { label: '我一个人都管不好还管别人？', value: 1 },
        { label: '想过但没付诸行动', value: 2 },
        { label: '有！把志同道合的人聚在一起很有意义', value: 3 },
      ],
    },
    {
      id: 'A3_q24', dim: 'A3',
      text: '你有没有"想发明/创造点什么改变现状"的想法？',
      options: [
        { label: '我的创新就是发明新的摸鱼方式', value: 1 },
        { label: '有过一些idea但没落地', value: 2 },
        { label: '有！并且在持续尝试中', value: 3 },
      ],
    },
    {
      id: 'A3_q25', dim: 'A3',
      text: '你对哲学/心理学这类"无用之学"？',
      options: [
        { label: '纯浪费时间，不如学门手艺', value: 1 },
        { label: '有点意思但不深入', value: 2 },
        { label: '热爱！理解自己和世界的工具', value: 3 },
      ],
    },
    {
      id: 'A3_q26', dim: 'A3',
      text: '你经历过存在主义危机（突然觉得一切没意义）吗？',
      options: [
        { label: '那不是危机，那是我的日常', value: 1 },
        { label: '偶尔会有这种时刻', value: 2 },
        { label: '经历过但找到了自己的答案', value: 3 },
      ],
    },
    {
      id: 'A3_q27', dim: 'A3',
      text: '每天早上让你起床的动力是什么？',
      options: [
        { label: '闹钟和不想被开除的恐惧', value: 1 },
        { label: '习惯性地起来看看有什么事', value: 2 },
        { label: '有期待的事情在等着我', value: 3 },
      ],
    },
    {
      id: 'A3_q28', dim: 'A3',
      text: '你的周末通常怎么过？',
      options: [
        { label: '躺+外卖+手机+无意识消磨时间', value: 1 },
        { label: '一半放松一半做点事', value: 2 },
        { label: '安排得很充实，每一天都值得好好过', value: 3 },
      ],
    },
    {
      id: 'A3_q29', dim: 'A3',
      text: '有人说"去做志愿者吧"，你？',
      options: [
        { label: '打工都不想去还做志愿者？', value: 1 },
        { label: '看是什么活动再决定', value: 2 },
        { label: '好啊！帮助别人让我开心', value: 3 },
      ],
    },
    {
      id: 'A3_q30', dim: 'A3',
      text: '旅行对你来说意味着什么？',
      options: [
        { label: '发朋友圈的素材', value: 1 },
        { label: '放松和休息', value: 2 },
        { label: '探索世界认识自己的过程', value: 3 },
      ],
    },
    {
      id: 'A3_q31', dim: 'A3',
      text: '你的爱好是"广撒网浅尝辄止"还是"深耕一个领域"？',
      options: [
        { label: '我的兴趣保质期比鲜奶还短', value: 1 },
        { label: '有几个会比较持久', value: 2 },
        { label: '我有至少一个深耕多年的爱好', value: 3 },
      ],
    },
    {
      id: 'A3_q32', dim: 'A3',
      text: '你读书/学习的驱动力是？',
      options: [
        { label: '考试逼的，没考试一页都不翻', value: 1 },
        { label: '有时候好奇心驱动', value: 2 },
        { label: '渴望理解更多，知识让我兴奋', value: 3 },
      ],
    },
    {
      id: 'A3_q33', dim: 'A3',
      text: '你有冥想/反思/写日记的习惯吗？',
      options: [
        { label: '我的冥想就是发呆+放空', value: 1 },
        { label: '偶尔会回顾一下', value: 2 },
        { label: '有固定的反思习惯，帮我保持清醒', value: 3 },
      ],
    },
    {
      id: 'A3_q34', dim: 'A3',
      text: '你会主动"感恩"吗？',
      options: [
        { label: '感恩什么？生活已经够难了', value: 1 },
        { label: '偶尔会觉得幸运', value: 2 },
        { label: '经常，感恩让我看到更多美好', value: 3 },
      ],
    },
    {
      id: 'A3_q35', dim: 'A3',
      text: '你对人生里程碑（生日/毕业/纪念日）的态度？',
      options: [
        { label: '又老了一岁有什么好庆祝的', value: 1 },
        { label: '看心情偶尔纪念一下', value: 2 },
        { label: '很重视，每个节点都值得被标记', value: 3 },
      ],
    },
    {
      id: 'A3_q36', dim: 'A3',
      text: '你的日常routine对你来说是？',
      options: [
        { label: '机械重复的无意义循环', value: 1 },
        { label: '有些是习惯有些是必须', value: 2 },
        { label: '精心设计的生活节奏', value: 3 },
      ],
    },
    {
      id: 'A3_q37', dim: 'A3',
      text: '你有"想为社会/他人做点贡献"的想法吗？',
      options: [
        { label: '我自己都自顾不暇', value: 1 },
        { label: '有但不知道从哪入手', value: 2 },
        { label: '有且正在行动', value: 3 },
      ],
    },
    {
      id: 'A3_q38', dim: 'A3',
      text: '你有一套自己的人生哲学吗？',
      options: [
        { label: '哲学？我的哲学就是活着就行', value: 1 },
        { label: '有一些零散的想法', value: 2 },
        { label: '有比较成体系的价值观和信念', value: 3 },
      ],
    },
    {
      id: 'A3_q39', dim: 'A3',
      text: '如果让你列出人生最重要的三件事，你能列出来吗？',
      options: [
        { label: '吃饭睡觉打游戏？我也不知道', value: 1 },
        { label: '能列出来但不太确定', value: 2 },
        { label: '能，而且我一直在朝着它们努力', value: 3 },
      ],
    },
    {
      id: 'A3_q40', dim: 'A3',
      text: '你觉得"在困境中找到意义"这件事？',
      options: [
        { label: '困境只有痛苦，别强行赋予意义', value: 1 },
        { label: '事后回看有时候确实有收获', value: 2 },
        { label: '认同，最黑暗的时刻往往藏着最深的成长', value: 3 },
      ],
    },
  ],

  // ═══════════ Ac1 动机导向 ═══════════
  Ac1: [
    {
      id: 'Ac1_q1', dim: 'Ac1',
      text: '我做事主要为了取得成果和进步，而不是避免麻烦。',
      options: [
        { label: '不，我只是在避免被骂', value: 1 },
        { label: '一半一半', value: 2 },
        { label: '是的，我是进攻型选手', value: 3 },
      ],
    },
    {
      id: 'Ac1_q2', dim: 'Ac1',
      text: '便秘30分钟了，拉不出来很难受。此时你更像？',
      options: [
        { label: '再坐30分钟，佛系等待奇迹', value: 1 },
        { label: '拍拍肚子骂两句', value: 2 },
        { label: '开塞露安排上，效率第一', value: 3 },
      ],
    },
    {
      id: 'Ac1_q3', dim: 'Ac1',
      text: '面前有个高风险高回报的机会，你？',
      options: [
        { label: '溜了溜了，我怕亏', value: 1 },
        { label: '先看看别人怎么做', value: 2 },
        { label: '搏一搏，单车变摩托', value: 3 },
      ],
    },
    {
      id: 'Ac1_q4', dim: 'Ac1',
      text: '你工作/学习的主要驱动力是？',
      options: [
        { label: '怕饿死 / 怕挂科', value: 1 },
        { label: '一半压力一半兴趣', value: 2 },
        { label: '想做出点名堂来', value: 3 },
      ],
    },
    {
      id: 'Ac1_q5', dim: 'Ac1',
      text: '打游戏时你的风格更接近？',
      options: [
        { label: '苟着，活到决赛圈才是硬道理', value: 1 },
        { label: '看情况，有把握才出手', value: 2 },
        { label: '刚枪！冲就完事了', value: 3 },
      ],
    },
    {
      id: 'Ac1_q6', dim: 'Ac1',
      text: '你更害怕"失败"还是"没试过"？',
      options: [
        { label: '当然是失败，面子很重要', value: 1 },
        { label: '都怕', value: 2 },
        { label: '"没试过"更可怕，失败了大不了重来', value: 3 },
      ],
    },

    {
      id: 'Ac1_q7', dim: 'Ac1',
      text: '打团队竞技游戏，你是带节奏的还是挂机的？',
      options: [
        { label: '挂机摸鱼，赢了算我运气好', value: 1 },
        { label: '跟着大部队走就行', value: 2 },
        { label: '必须我来指挥，卷王就是我', value: 3 },
      ],
    },
    {
      id: 'Ac1_q8', dim: 'Ac1',
      text: '被领导/老师狠批了一顿，你的后续行动？',
      options: [
        { label: '摆烂，反正怎么做都被骂', value: 1 },
        { label: '难过一会儿然后继续', value: 2 },
        { label: '憋着一股劲要证明ta错了', value: 3 },
      ],
    },
    {
      id: 'Ac1_q9', dim: 'Ac1',
      text: '没人分配任务的时候，你通常？',
      options: [
        { label: '没任务？那就是合法摸鱼时间', value: 1 },
        { label: '等一等看有没有事情来', value: 2 },
        { label: '自己找活干，闲着比忙着难受', value: 3 },
      ],
    },
    {
      id: 'Ac1_q10', dim: 'Ac1',
      text: '你做一件事更多是因为"自己想做"还是"外界要求"？',
      options: [
        { label: '99%外界要求，没人逼我我就不动', value: 1 },
        { label: '各一半吧', value: 2 },
        { label: '主要是自驱，外界压力是辅助', value: 3 },
      ],
    },
    {
      id: 'Ac1_q11', dim: 'Ac1',
      text: '达成一个目标后你的感受是？',
      options: [
        { label: '哦，就这？没什么特别的', value: 1 },
        { label: '开心但很快就过去了', value: 2 },
        { label: '成就感爆棚！马上冲下一个', value: 3 },
      ],
    },
    {
      id: 'Ac1_q12', dim: 'Ac1',
      text: '遇到重大困难/逆境，你的状态？',
      options: [
        { label: '直接躺平，等暴风雨过去', value: 1 },
        { label: '难受但能慢慢调整', value: 2 },
        { label: '逆境激发战斗力，越挫越勇', value: 3 },
      ],
    },
    {
      id: 'Ac1_q13', dim: 'Ac1',
      text: '你是那种会给自己定KPI的人吗？',
      options: [
        { label: '上班已经够多KPI了谢谢不用', value: 1 },
        { label: '偶尔会设一些小目标', value: 2 },
        { label: '年度/季度/月度目标全有，比领导管得还严', value: 3 },
      ],
    },
    {
      id: 'Ac1_q14', dim: 'Ac1',
      text: '被拒绝了（面试/告白/投稿），你的后续？',
      options: [
        { label: '算了算了，这不是我的命', value: 1 },
        { label: '难过一阵子然后看看别的机会', value: 2 },
        { label: '分析原因调整策略再来一次', value: 3 },
      ],
    },
    {
      id: 'Ac1_q15', dim: 'Ac1',
      text: '你有没有那种"一定要变得更强"的执念？',
      options: [
        { label: '现在这样就挺好，别卷我', value: 1 },
        { label: '有时候有有时候不想动', value: 2 },
        { label: '一直有，停下来就焦虑', value: 3 },
      ],
    },
    {
      id: 'Ac1_q16', dim: 'Ac1',
      text: '你的职业野心有多大？',
      options: [
        { label: '混口饭吃不被裁就行', value: 1 },
        { label: '有点想法但不是特别强烈', value: 2 },
        { label: '我要做到行业top/自己当老板', value: 3 },
      ],
    },
    {
      id: 'Ac1_q17', dim: 'Ac1',
      text: '朋友喊你去挑战体力极限活动（马拉松/铁人三项），你？',
      options: [
        { label: '我的极限就是从床走到冰箱', value: 1 },
        { label: '听起来有点吓人但可以考虑', value: 2 },
        { label: '报名！人生就是要突破极限', value: 3 },
      ],
    },
    {
      id: 'Ac1_q18', dim: 'Ac1',
      text: '学一个全新的技能（编程/乐器/外语），你的动力？',
      options: [
        { label: '除非逼不得已否则懒得学', value: 1 },
        { label: '感兴趣就学但不一定坚持', value: 2 },
        { label: '学新技能让我兴奋，解锁新成就的感觉', value: 3 },
      ],
    },
    {
      id: 'Ac1_q19', dim: 'Ac1',
      text: '你会拿自己和别人比吗？',
      options: [
        { label: '不比，比了只会更emo', value: 1 },
        { label: '偶尔比一下但不太在意', value: 2 },
        { label: '会，别人的优秀激励我变得更好', value: 3 },
      ],
    },
    {
      id: 'Ac1_q20', dim: 'Ac1',
      text: 'ddl和自律哪个更能让你动起来？',
      options: [
        { label: 'ddl，没有ddl我不会动的', value: 1 },
        { label: '两者都需要', value: 2 },
        { label: '自律，我给自己定的deadline比外部的还早', value: 3 },
      ],
    },
    {
      id: 'Ac1_q21', dim: 'Ac1',
      text: '你做事有没有"必须要做到最好"的冲动？',
      options: [
        { label: '差不多就行，60分万岁', value: 1 },
        { label: '看事情重不重要', value: 2 },
        { label: '做就做到极致，否则不如不做', value: 3 },
      ],
    },
    {
      id: 'Ac1_q22', dim: 'Ac1',
      text: '你做事更看重速度还是质量？',
      options: [
        { label: '快点搞完就行，质量什么的再说', value: 1 },
        { label: '尽量平衡', value: 2 },
        { label: '质量第一，宁可慢也要做到位', value: 3 },
      ],
    },
    {
      id: 'Ac1_q23', dim: 'Ac1',
      text: '有机会参与一个颠覆行业的创新项目，你？',
      options: [
        { label: '听着就累，我还是做我的螺丝钉', value: 1 },
        { label: '有兴趣但怕搞砸', value: 2 },
        { label: '冲！这种机会千载难逢', value: 3 },
      ],
    },
    {
      id: 'Ac1_q24', dim: 'Ac1',
      text: '你有当领导/管理者的欲望吗？',
      options: [
        { label: '管别人太累了，还是被管着省心', value: 1 },
        { label: '如果机会来了不排斥', value: 2 },
        { label: '想！我觉得我能带好一个团队', value: 3 },
      ],
    },
    {
      id: 'Ac1_q25', dim: 'Ac1',
      text: '帮助别人成功这件事能激励你吗？',
      options: [
        { label: '自己都没成功呢帮啥别人', value: 1 },
        { label: '看关系，关系好的会帮', value: 2 },
        { label: '能！看到别人因我变好比自己成功还爽', value: 3 },
      ],
    },
    {
      id: 'Ac1_q26', dim: 'Ac1',
      text: '别人跟你比拼/竞争，你的反应？',
      options: [
        { label: '你卷你的我躺我的，别拉我', value: 1 },
        { label: '看心情和对手决定参不参战', value: 2 },
        { label: '来啊！竞争让我DNA动了', value: 3 },
      ],
    },
    {
      id: 'Ac1_q27', dim: 'Ac1',
      text: '做一件事之前能想象完成后的成就感吗？',
      options: [
        { label: '想不到，我的大脑只能模拟摸鱼画面', value: 1 },
        { label: '有时候能有时候不能', value: 2 },
        { label: '必须先脑补一遍成功画面再行动', value: 3 },
      ],
    },
    {
      id: 'Ac1_q28', dim: 'Ac1',
      text: '遇到一个非常棘手的问题，你？',
      options: [
        { label: '这题太难了我选择跳过', value: 1 },
        { label: '试试看解不开就算了', value: 2 },
        { label: '上头了！死磕到底', value: 3 },
      ],
    },
    {
      id: 'Ac1_q29', dim: 'Ac1',
      text: '你对新事物的好奇心有多强？',
      options: [
        { label: '好奇什么？我对一切都提不起兴趣', value: 1 },
        { label: '遇到感兴趣的会研究一下', value: 2 },
        { label: '超强！新东西让我两眼放光', value: 3 },
      ],
    },
    {
      id: 'Ac1_q30', dim: 'Ac1',
      text: '你工作/学习中"被人认可"的动力占多少？',
      options: [
        { label: '主要是为了不饿死，认可无所谓', value: 1 },
        { label: '认可是锦上添花', value: 2 },
        { label: '认可是重要动力但不是唯一', value: 3 },
      ],
    },
    {
      id: 'Ac1_q31', dim: 'Ac1',
      text: '你更喜欢"自己决定做什么"还是"被安排"？',
      options: [
        { label: '被安排好了直接执行就行', value: 1 },
        { label: '有框架但给我一定自由度最好', value: 2 },
        { label: '我要自己决定，被安排的感觉窒息', value: 3 },
      ],
    },
    {
      id: 'Ac1_q32', dim: 'Ac1',
      text: '你更喜欢一个人干活还是和团队一起？',
      options: [
        { label: '一个人安安静静摸鱼最舒服', value: 1 },
        { label: '看任务类型', value: 2 },
        { label: '团队协作让我更有动力和灵感', value: 3 },
      ],
    },
    {
      id: 'Ac1_q33', dim: 'Ac1',
      text: '你更关注"眼前的利益"还是"长远的发展"？',
      options: [
        { label: '先活过今天再说明天', value: 1 },
        { label: '两者兼顾', value: 2 },
        { label: '愿意牺牲短期利益换长期成长', value: 3 },
      ],
    },
    {
      id: 'Ac1_q34', dim: 'Ac1',
      text: '什么东西最能给你充电/让你精力满满？',
      options: [
        { label: '躺着什么都不做', value: 1 },
        { label: '运动/社交/独处看情况', value: 2 },
        { label: '完成一个有挑战的任务', value: 3 },
      ],
    },
    {
      id: 'Ac1_q35', dim: 'Ac1',
      text: '你有过"工作到忘记时间"的心流体验吗？',
      options: [
        { label: '有过但那是在摸鱼的时候', value: 1 },
        { label: '偶尔有', value: 2 },
        { label: '经常！沉浸在一件事里的感觉太棒了', value: 3 },
      ],
    },
    {
      id: 'Ac1_q36', dim: 'Ac1',
      text: '你觉得自己离burnout有多远？',
      options: [
        { label: '已经在里面了，每天都在燃尽状态', value: 1 },
        { label: '偶尔会感觉快到了', value: 2 },
        { label: '我的动力系统很稳定能持续输出', value: 3 },
      ],
    },
    {
      id: 'Ac1_q37', dim: 'Ac1',
      text: '失败后你恢复战斗力需要多久？',
      options: [
        { label: '直接退出游戏不玩了', value: 1 },
        { label: '需要缓几天', value: 2 },
        { label: '很快就能重新出发，失败是成功他妈', value: 3 },
      ],
    },
    {
      id: 'Ac1_q38', dim: 'Ac1',
      text: '你做事是"想清楚再动手"还是"先动手再说"？',
      options: [
        { label: '想太多反而不想动了所以干脆不想', value: 1 },
        { label: '简单想想就开始', value: 2 },
        { label: '先动起来！实践中调整最高效', value: 3 },
      ],
    },
    {
      id: 'Ac1_q39', dim: 'Ac1',
      text: '有人说你"太拼了"，你的反应？',
      options: [
        { label: '不可能，你一定认错人了', value: 1 },
        { label: '偶尔吧大部分时候还是在摸', value: 2 },
        { label: '拼是常态，不拼才不正常', value: 3 },
      ],
    },
    {
      id: 'Ac1_q40', dim: 'Ac1',
      text: '如果用一个词形容你的人生态度，更接近？',
      options: [
        { label: '躺平——能不动就不动', value: 1 },
        { label: '随缘——尽力但不强求', value: 2 },
        { label: '冲冲冲——生命在于折腾', value: 3 },
      ],
    },
  ],

  // ═══════════ Ac2 决策风格 ═══════════
  Ac2: [
    {
      id: 'Ac2_q1', dim: 'Ac2',
      text: '做决定时你通常？',
      options: [
        { label: '纠结到头秃，还要问八百个人', value: 1 },
        { label: '想一想但不会太久', value: 2 },
        { label: '果断拍板，不喜欢磨叽', value: 3 },
      ],
    },
    {
      id: 'Ac2_q2', dim: 'Ac2',
      text: '此题没有题目，请盲选',
      options: [
        { label: '等等让我先分析一下概率', value: 1 },
        { label: '嗯……B？', value: 2 },
        { label: '闭眼就选了', value: 3 },
      ],
    },
    {
      id: 'Ac2_q3', dim: 'Ac2',
      text: '饭店菜单200道菜，你要多久能点完？',
      options: [
        { label: '半小时起步，还要问服务员推荐', value: 1 },
        { label: '五分钟，扫一遍差不多了', value: 2 },
        { label: '一分钟，看到想吃的直接点', value: 3 },
      ],
    },
    {
      id: 'Ac2_q4', dim: 'Ac2',
      text: '网购看到一件衣服还不错但不确定，你？',
      options: [
        { label: '加购物车，看评价，问朋友，纠结三天', value: 1 },
        { label: '看看评价，行就下单', value: 2 },
        { label: '直接买，不好看退了就是', value: 3 },
      ],
    },
    {
      id: 'Ac2_q5', dim: 'Ac2',
      text: '朋友问你"咱今晚吃什么？"你？',
      options: [
        { label: '"你说吧""都行""随便"三连', value: 1 },
        { label: '想了想，提了个建议', value: 2 },
        { label: '直接定了地方发了位置', value: 3 },
      ],
    },
    {
      id: 'Ac2_q6', dim: 'Ac2',
      text: '人生重大选择（读什么学校/去哪个城市），你的决策方式？',
      options: [
        { label: '列了Excel做了SWOT分析还是选不出来', value: 1 },
        { label: '理性分析加一点直觉', value: 2 },
        { label: '跟着感觉走，想去哪就去哪', value: 3 },
      ],
    },
    {
      id: 'Ac2_q7', dim: 'Ac2',
      text: '限时秒杀还剩3秒，你还没想好要不要买，你？',
      options: [
        { label: '眼睁睁看着倒计时归零，痛失好价', value: 1 },
        { label: '最后一秒赌一把点下去了', value: 2 },
        { label: '早就付完款了，三秒够我买三单', value: 3 },
      ],
    },
    {
      id: 'Ac2_q8', dim: 'Ac2',
      text: '已经下单的外卖，突然不想吃了，你会？',
      options: [
        { label: '算了吧，取消太麻烦了，将就吃', value: 1 },
        { label: '纠结一下，看看能不能改', value: 2 },
        { label: '秒取消重新点，我的胃我做主', value: 3 },
      ],
    },
    {
      id: 'Ac2_q9', dim: 'Ac2',
      text: '朋友们在群里吵去哪玩，你的角色通常是？',
      options: [
        { label: '沉默跟随，你们决定就好别cue我', value: 1 },
        { label: '提两个建议供大家参考', value: 2 },
        { label: '行了别吵了听我的，出发！', value: 3 },
      ],
    },
    {
      id: 'Ac2_q10', dim: 'Ac2',
      text: '做完一个决定后你会反复回想"如果当初选了另一个"吗？',
      options: [
        { label: '会，脑子里全是平行宇宙剧情', value: 1 },
        { label: '偶尔闪过但不会沉迷', value: 2 },
        { label: '选都选了，往前看不回头', value: 3 },
      ],
    },
    {
      id: 'Ac2_q11', dim: 'Ac2',
      text: '面前两杯奶茶一模一样好喝，必须选一杯，你？',
      options: [
        { label: '原地宕机，选择困难症发作', value: 1 },
        { label: '随便指一杯吧', value: 2 },
        { label: '左边，不需要理由', value: 3 },
      ],
    },
    {
      id: 'Ac2_q12', dim: 'Ac2',
      text: '别人让你帮忙做个决定（比如选颜色），你？',
      options: [
        { label: '啊这……我连自己的都选不好', value: 1 },
        { label: '行吧，帮你选一个', value: 2 },
        { label: '红色，别问为什么，问就是直觉', value: 3 },
      ],
    },
    {
      id: 'Ac2_q13', dim: 'Ac2',
      text: '信息只有60%的时候就要做决定，你？',
      options: [
        { label: '不行，我需要更多数据，至少凑到95%', value: 1 },
        { label: '够用了，先做再说', value: 2 },
        { label: '30%我就敢拍板了，60%算豪华版', value: 3 },
      ],
    },
    {
      id: 'Ac2_q14', dim: 'Ac2',
      text: '直觉告诉你A，数据分析告诉你B，你选？',
      options: [
        { label: 'B，数据不会骗人（但我会纠结很久）', value: 1 },
        { label: '综合考虑一下', value: 2 },
        { label: 'A，直觉yyds，数据是给老板看的', value: 3 },
      ],
    },
    {
      id: 'Ac2_q15', dim: 'Ac2',
      text: '连续做了一天各种选择题（吃啥穿啥干啥），到了晚上你？',
      options: [
        { label: 'CPU过热了，别再问我任何问题', value: 1 },
        { label: '有点累但还行', value: 2 },
        { label: '决策是我的快乐源泉，来啊继续', value: 3 },
      ],
    },
    {
      id: 'Ac2_q16', dim: 'Ac2',
      text: '决定好了的事情，你会不会突然又推翻重来？',
      options: [
        { label: '经常，我的决定比天气预报还善变', value: 1 },
        { label: '偶尔会修改细节', value: 2 },
        { label: '钉死了就是钉死了，不翻案', value: 3 },
      ],
    },
    {
      id: 'Ac2_q17', dim: 'Ac2',
      text: '选今天穿什么出门，你的流程是？',
      options: [
        { label: '试穿五套、拍照对比、问室友意见', value: 1 },
        { label: '心里有个大概，搭一搭就出门', value: 2 },
        { label: '抓起最上面那件就走，穿搭全靠随机', value: 3 },
      ],
    },
    {
      id: 'Ac2_q18', dim: 'Ac2',
      text: '老板让你帮拿个主意但你不太懂这个领域，你？',
      options: [
        { label: '不懂就不瞎说，疯狂查资料先', value: 1 },
        { label: '凭现有认知给个建议', value: 2 },
        { label: '拍脑门先给一个，错了再改呗', value: 3 },
      ],
    },
    {
      id: 'Ac2_q19', dim: 'Ac2',
      text: '刷了半小时还没选好看什么电影/剧，你？',
      options: [
        { label: '继续刷，总会遇到命中注定的那部', value: 1 },
        { label: '差不多行了，随便点一个', value: 2 },
        { label: '选第一个看到的，时间比选择更贵', value: 3 },
      ],
    },
    {
      id: 'Ac2_q20', dim: 'Ac2',
      text: '旅行计划你一般怎么定？',
      options: [
        { label: '做了三十页攻略还觉得不够详细', value: 1 },
        { label: '大致路线定好，细节到了再说', value: 2 },
        { label: '买张票就出发，攻略是什么能吃吗', value: 3 },
      ],
    },
    {
      id: 'Ac2_q21', dim: 'Ac2',
      text: '面试拿到两个差不多的offer，你会？',
      options: [
        { label: '打电话问十个前辈、做对比表格、还是选不出', value: 1 },
        { label: '分析核心差异然后做决定', value: 2 },
        { label: '哪个离家近/钱多选哪个，简单粗暴', value: 3 },
      ],
    },
    {
      id: 'Ac2_q22', dim: 'Ac2',
      text: '暧昧对象发消息了，要不要秒回？你内心戏是？',
      options: [
        { label: '先放十分钟，分析措辞，编辑七遍再发', value: 1 },
        { label: '想一下怎么回然后发出去', value: 2 },
        { label: '看到就回，别整那些恋爱博弈学', value: 3 },
      ],
    },
    {
      id: 'Ac2_q23', dim: 'Ac2',
      text: '要不要花三万块报个课/考个证，你的决策周期？',
      options: [
        { label: '先观望三个月到半年再说', value: 1 },
        { label: '研究一两周做个预算就决定了', value: 2 },
        { label: '想学就报，犹豫的时间都够上完课了', value: 3 },
      ],
    },
    {
      id: 'Ac2_q24', dim: 'Ac2',
      text: '体检报告有个指标偏高，医生说"可以观察也可以现在干预"，你？',
      options: [
        { label: '反复搜索、问三个医生、加五个病友群', value: 1 },
        { label: '听医生建议来', value: 2 },
        { label: '干预，别等了，健康不赌博', value: 3 },
      ],
    },
    {
      id: 'Ac2_q25', dim: 'Ac2',
      text: '手机出新款了，换不换？',
      options: [
        { label: '看二十个测评视频，比了三个月价格', value: 1 },
        { label: '看看核心升级点，值就换', value: 2 },
        { label: '发布会结束直接下单，首发必须有我', value: 3 },
      ],
    },
    {
      id: 'Ac2_q26', dim: 'Ac2',
      text: '租房还是买房？搬家还是续租？你面对这类问题时？',
      options: [
        { label: '脑子里住了个辩论队，正反双方打了三百回合', value: 1 },
        { label: '列出关键因素权衡一下', value: 2 },
        { label: '想好大方向就执行，细节慢慢调', value: 3 },
      ],
    },
    {
      id: 'Ac2_q27', dim: 'Ac2',
      text: '周末朋友临时约你，但你已经有了居家摆烂的计划，你？',
      options: [
        { label: '纠结到出发前一小时还没决定', value: 1 },
        { label: '看看是什么活动再说', value: 2 },
        { label: '去或不去，三秒给答复', value: 3 },
      ],
    },
    {
      id: 'Ac2_q28', dim: 'Ac2',
      text: '帮别人选生日礼物，你的效率如何？',
      options: [
        { label: '逛了三天淘宝还在加购物车', value: 1 },
        { label: '心里有个预算和方向，很快能选好', value: 2 },
        { label: '进店五分钟搞定，选礼物又不是高考', value: 3 },
      ],
    },
    {
      id: 'Ac2_q29', dim: 'Ac2',
      text: '导航给了三条路线，你怎么选？',
      options: [
        { label: '对比每条路的路况、红绿灯数、施工信息', value: 1 },
        { label: '选推荐的那条', value: 2 },
        { label: '哪条最短走哪条，不看其他', value: 3 },
      ],
    },
    {
      id: 'Ac2_q30', dim: 'Ac2',
      text: '有人给你提了个新建议，和你原来的决定相反，你？',
      options: [
        { label: '又开始纠结了，重新回到原点', value: 1 },
        { label: '听一听有道理就调整', value: 2 },
        { label: '谢谢但我已经想好了', value: 3 },
      ],
    },
    {
      id: 'Ac2_q31', dim: 'Ac2',
      text: '地震来了！你的反应速度？',
      options: [
        { label: '大脑蓝屏三秒才想起来要跑', value: 1 },
        { label: '先判断级数再决定行动', value: 2 },
        { label: '身体已经钻到桌子底下了脑子还没反应过来', value: 3 },
      ],
    },
    {
      id: 'Ac2_q32', dim: 'Ac2',
      text: '今天只能做三件事，你怎么排优先级？',
      options: [
        { label: '光排优先级就花了两小时，一件都没做', value: 1 },
        { label: '挑最重要的先做', value: 2 },
        { label: '秒排，不需要思考，重要的事自带高亮', value: 3 },
      ],
    },
    {
      id: 'Ac2_q33', dim: 'Ac2',
      text: '同时有三个项目要推进，你的应对方式？',
      options: [
        { label: '焦虑到哪个都不想动', value: 1 },
        { label: '排个序一个一个来', value: 2 },
        { label: '三个一起冲，我就是人形多线程', value: 3 },
      ],
    },
    {
      id: 'Ac2_q34', dim: 'Ac2',
      text: '你做决定前会花多少时间收集信息？',
      options: [
        { label: '恨不得把整个互联网看完再决定', value: 1 },
        { label: '看看关键信息差不多了就动', value: 2 },
        { label: '够用就行，等信息齐了黄花菜都凉了', value: 3 },
      ],
    },
    {
      id: 'Ac2_q35', dim: 'Ac2',
      text: '遇到拿不准的事你会问别人意见吗？',
      options: [
        { label: '会，而且要问到大家意见统一我才安心', value: 1 },
        { label: '问一两个信任的人参考一下', value: 2 },
        { label: '自己的事自己定，问别人不如问自己', value: 3 },
      ],
    },
    {
      id: 'Ac2_q36', dim: 'Ac2',
      text: '做了个事后证明是错误的决定，你的态度？',
      options: [
        { label: '后悔到捶胸顿足，以后更不敢做决定了', value: 1 },
        { label: '有点遗憾但也是经验', value: 2 },
        { label: '错了就错了，及时止损换方向', value: 3 },
      ],
    },
    {
      id: 'Ac2_q37', dim: 'Ac2',
      text: '你多久会改变一次自己的观点/立场？',
      options: [
        { label: '经常，我的观点比股票还波动', value: 1 },
        { label: '有足够理由才会改', value: 2 },
        { label: '很少改，我相信自己的判断', value: 3 },
      ],
    },
    {
      id: 'Ac2_q38', dim: 'Ac2',
      text: '要不要把这件事交给别人做，你？',
      options: [
        { label: '纠结半天，怕别人做不好又怕自己没时间', value: 1 },
        { label: '评估一下对方能力再决定', value: 2 },
        { label: '该委托就委托，我不是超人', value: 3 },
      ],
    },
    {
      id: 'Ac2_q39', dim: 'Ac2',
      text: '快递到了两个一样的东西要退一个，你多久能选好？',
      options: [
        { label: '对比了三天材质、色差、线头数量', value: 1 },
        { label: '简单看看质量留好的', value: 2 },
        { label: '随便退一个，都一样的东西纠结啥', value: 3 },
      ],
    },
    {
      id: 'Ac2_q40', dim: 'Ac2',
      text: '你觉得"选择恐惧症"这个词？',
      options: [
        { label: '就是在说我本人，DNA验证通过', value: 1 },
        { label: '偶尔犯一下但不至于恐惧', value: 2 },
        { label: '跟我无关，选东西有什么好怕的', value: 3 },
      ],
    },
  ],

  // ═══════════ Ac3 执行模式 ═══════════
  Ac3: [
    {
      id: 'Ac3_q1', dim: 'Ac3',
      text: '别人说你"执行力强"，你内心更接近？',
      options: [
        { label: '那是因为deadline在追杀我', value: 1 },
        { label: '有时候吧，看心情', value: 2 },
        { label: '确实，事情就应该被推进', value: 3 },
      ],
    },
    {
      id: 'Ac3_q2', dim: 'Ac3',
      text: '我做事常常有计划，后面一般跟着什么？',
      options: [
        { label: '……然后计划就寄了', value: 1 },
        { label: '完成一半算成功', value: 2 },
        { label: '不按计划走我会难受', value: 3 },
      ],
    },
    {
      id: 'Ac3_q3', dim: 'Ac3',
      text: '下周交的任务，你通常什么时候开始？',
      options: [
        { label: '前一天晚上通宵，deadline是第一生产力', value: 1 },
        { label: '中途做一点，最后几天收尾', value: 2 },
        { label: '收到任务当天就开工', value: 3 },
      ],
    },
    {
      id: 'Ac3_q4', dim: 'Ac3',
      text: '你的待办清单通常长什么样？',
      options: [
        { label: '什么待办清单？我用ddl管理人生', value: 1 },
        { label: '有清单，完成率五五开', value: 2 },
        { label: '全部划掉才能安心睡觉', value: 3 },
      ],
    },
    {
      id: 'Ac3_q5', dim: 'Ac3',
      text: '收到一个新任务，你的启动速度？',
      options: [
        { label: '先收藏，等我准备好了再说（永远没准备好）', value: 1 },
        { label: '看看具体要求，安排在日程里', value: 2 },
        { label: '收到的那一秒就开始动了', value: 3 },
      ],
    },
    {
      id: 'Ac3_q6', dim: 'Ac3',
      text: '你更认同哪句话？',
      options: [
        { label: '条条大路通罗马，所以先躺会儿也没事', value: 1 },
        { label: '慢慢来比较快', value: 2 },
        { label: '想到就做，兵贵神速', value: 3 },
      ],
    },
    {
      id: 'Ac3_q7', dim: 'Ac3',
      text: '同时处理多件事和专注做一件事，你更像？',
      options: [
        { label: '多线程？我单线程都经常卡顿', value: 1 },
        { label: '看任务难度切换模式', value: 2 },
        { label: '多线程并行，效率拉满', value: 3 },
      ],
    },
    {
      id: 'Ac3_q8', dim: 'Ac3',
      text: '正在专注做事的时候被人打断，你的反应？',
      options: [
        { label: '正好给了我摸鱼的理由，谢谢', value: 1 },
        { label: '有点烦但能拉回来', value: 2 },
        { label: '处理完立刻切回去，进度条不能停', value: 3 },
      ],
    },
    {
      id: 'Ac3_q9', dim: 'Ac3',
      text: '还没完全搞清楚要求就要开始动手，你？',
      options: [
        { label: '不行，需求文档不齐我不动', value: 1 },
        { label: '先做着，边做边问', value: 2 },
        { label: '直接冲，做出来再调整，迭代就完事了', value: 3 },
      ],
    },
    {
      id: 'Ac3_q10', dim: 'Ac3',
      text: '你手里的项目/作业/任务，完成率通常是多少？',
      options: [
        { label: '能完成60%就谢天谢地了，烂尾王本人', value: 1 },
        { label: '大部分能完成，偶尔会遗漏', value: 2 },
        { label: '100%交付，不完成不收工', value: 3 },
      ],
    },
    {
      id: 'Ac3_q11', dim: 'Ac3',
      text: '养成一个好习惯（比如早起/健身），你的成功率？',
      options: [
        { label: '三天打鱼两天晒网是我的人生写照', value: 1 },
        { label: '能坚持一阵子，偶尔断档', value: 2 },
        { label: '一旦决定就能长期坚持，习惯养成机器', value: 3 },
      ],
    },
    {
      id: 'Ac3_q12', dim: 'Ac3',
      text: '越临近截止日期你越？',
      options: [
        { label: '越焦虑越摸鱼，死亡螺旋启动', value: 1 },
        { label: '压力就是动力，开始加速', value: 2 },
        { label: '早就做完了，deadline对我来说是复查日', value: 3 },
      ],
    },
    {
      id: 'Ac3_q13', dim: 'Ac3',
      text: '你做事喜欢按固定流程来，还是随机应变？',
      options: [
        { label: '什么流程？我全靠即兴发挥', value: 1 },
        { label: '大框架有，细节灵活', value: 2 },
        { label: 'SOP写好了，按步骤执行，不接受improvise', value: 3 },
      ],
    },
    {
      id: 'Ac3_q14', dim: 'Ac3',
      text: '你一天的精力分配通常是？',
      options: [
        { label: '全天低电量模式，靠咖啡续命', value: 1 },
        { label: '有高峰有低谷，正常波动', value: 2 },
        { label: '精准管理，高峰期干硬活，低谷期做杂事', value: 3 },
      ],
    },
    {
      id: 'Ac3_q15', dim: 'Ac3',
      text: '你会用工具/App来管理自己的任务和时间吗？',
      options: [
        { label: '下了十个效率App，没打开过', value: 1 },
        { label: '用一两个简单的工具', value: 2 },
        { label: '整套系统搭好了，日历+待办+复盘一条龙', value: 3 },
      ],
    },
    {
      id: 'Ac3_q16', dim: 'Ac3',
      text: '你有没有"对自己说到做到"的accountability机制？',
      options: [
        { label: '对自己的承诺跟新年flag一样，说说而已', value: 1 },
        { label: '偶尔会立个小目标然后尽量做到', value: 2 },
        { label: '答应自己的事比答应别人的还认真', value: 3 },
      ],
    },
    {
      id: 'Ac3_q17', dim: 'Ac3',
      text: '一个任务做到一半，你会停下来看看进度吗？',
      options: [
        { label: '不看不看，看了更焦虑', value: 1 },
        { label: '偶尔check一下', value: 2 },
        { label: '定时检查进度，确保在正轨上', value: 3 },
      ],
    },
    {
      id: 'Ac3_q18', dim: 'Ac3',
      text: '工作/学习中途你多久休息一次？',
      options: [
        { label: '我的休息和工作已经融为一体了（一直在摸鱼）', value: 1 },
        { label: '累了就歇会儿', value: 2 },
        { label: '定时休息，番茄钟安排上', value: 3 },
      ],
    },
    {
      id: 'Ac3_q19', dim: 'Ac3',
      text: '你会特意优化自己的工作环境吗（桌面布局、噪音、灯光）？',
      options: [
        { label: '桌面乱成垃圾场但我知道每样东西在哪（不一定）', value: 1 },
        { label: '保持基本整洁', value: 2 },
        { label: '工位是我的战场，必须最优配置', value: 3 },
      ],
    },
    {
      id: 'Ac3_q20', dim: 'Ac3',
      text: '你会给自己的一天做时间规划吗？',
      options: [
        { label: '计划？我的一天全靠随机事件驱动', value: 1 },
        { label: '大概知道今天要干嘛', value: 2 },
        { label: '精确到小时的日程表已经安排好了', value: 3 },
      ],
    },
    {
      id: 'Ac3_q21', dim: 'Ac3',
      text: '做完一件事你会回顾/复盘吗？',
      options: [
        { label: '做完就忘，过去的就让它过去吧', value: 1 },
        { label: '大的事情会想一想', value: 2 },
        { label: '必须复盘，不总结就等于白做', value: 3 },
      ],
    },
    {
      id: 'Ac3_q22', dim: 'Ac3',
      text: '面对一个很无聊但必须做的任务，你？',
      options: [
        { label: '拖到不能再拖，痛苦面具', value: 1 },
        { label: '硬着头皮做完', value: 2 },
        { label: '先做无聊的，清掉了心里舒服', value: 3 },
      ],
    },
    {
      id: 'Ac3_q23', dim: 'Ac3',
      text: '你的物理桌面/工作台通常是什么状态？',
      options: [
        { label: '考古现场，底下可能还压着上个月的外卖盒', value: 1 },
        { label: '偶尔收拾一下', value: 2 },
        { label: '整洁到可以直播的程度', value: 3 },
      ],
    },
    {
      id: 'Ac3_q24', dim: 'Ac3',
      text: '你手机里的文件/相册/聊天记录？',
      options: [
        { label: '存储空间警告是我的日常通知', value: 1 },
        { label: '偶尔清理一下', value: 2 },
        { label: '分类归档，定期清理，强迫症患者', value: 3 },
      ],
    },
    {
      id: 'Ac3_q25', dim: 'Ac3',
      text: '你的deadline达标率大概是多少？',
      options: [
        { label: '50%以下，我跟deadline的关系是互相伤害', value: 1 },
        { label: '大部分能赶上，偶尔晚一点', value: 2 },
        { label: '99%准时交付，提前完成是常态', value: 3 },
      ],
    },
    {
      id: 'Ac3_q26', dim: 'Ac3',
      text: '你有没有答应了太多事结果做不完的情况？',
      options: [
        { label: '经常，嘴比手快是我的核心竞争力', value: 1 },
        { label: '偶尔会高估自己的产能', value: 2 },
        { label: '很少，我会评估好再答应', value: 3 },
      ],
    },
    {
      id: 'Ac3_q27', dim: 'Ac3',
      text: '你怎么决定先做哪个后做哪个？',
      options: [
        { label: '哪个快乐做哪个（然后重要的全拖了）', value: 1 },
        { label: '紧急的先做', value: 2 },
        { label: '按重要+紧急四象限排好，依次推进', value: 3 },
      ],
    },
    {
      id: 'Ac3_q28', dim: 'Ac3',
      text: '执行过程中遇到挫折/Bug，你的反应？',
      options: [
        { label: '摆烂，明天再说吧', value: 1 },
        { label: '烦一会儿然后继续想办法', value: 2 },
        { label: '打了鸡血一样debug，不解决不睡觉', value: 3 },
      ],
    },
    {
      id: 'Ac3_q29', dim: 'Ac3',
      text: '你更喜欢一个人干活还是团队协作？',
      options: [
        { label: '一个人摸鱼自由，不想被人催', value: 1 },
        { label: '看项目类型决定', value: 2 },
        { label: '团队协作效率高，我喜欢推动大家一起冲', value: 3 },
      ],
    },
    {
      id: 'Ac3_q30', dim: 'Ac3',
      text: '做完一个东西你会自己检查一遍吗？',
      options: [
        { label: '交了就是交了，检查是什么概念', value: 1 },
        { label: '大概看一遍', value: 2 },
        { label: '至少check两遍，细节决定成败', value: 3 },
      ],
    },
    {
      id: 'Ac3_q31', dim: 'Ac3',
      text: '你做完事之后会写文档/做记录吗？',
      options: [
        { label: '文档？我连注释都不写', value: 1 },
        { label: '重要的会记一下', value: 2 },
        { label: '记录是标配，未来的自己会感谢我', value: 3 },
      ],
    },
    {
      id: 'Ac3_q32', dim: 'Ac3',
      text: '同样的错误你会犯几次？',
      options: [
        { label: '同一个坑我能掉进去三次以上', value: 1 },
        { label: '大部分能吸取教训', value: 2 },
        { label: '一次，我会建立机制确保不再犯', value: 3 },
      ],
    },
    {
      id: 'Ac3_q33', dim: 'Ac3',
      text: '你做事的节奏是"一次做好"还是"先凑合再迭代"？',
      options: [
        { label: '先凑合……然后就没有然后了', value: 1 },
        { label: '先出个初版再逐步优化', value: 2 },
        { label: '争取一次到位，返工是浪费生命', value: 3 },
      ],
    },
    {
      id: 'Ac3_q34', dim: 'Ac3',
      text: '能用工具/脚本自动化的重复工作，你会？',
      options: [
        { label: '手动做就行了，写脚本更累', value: 1 },
        { label: '如果不太复杂会试试', value: 2 },
        { label: '必须自动化，重复劳动是对人类的侮辱', value: 3 },
      ],
    },
    {
      id: 'Ac3_q35', dim: 'Ac3',
      text: '需要向别人汇报进度时，你？',
      options: [
        { label: '不催不说，催了现编', value: 1 },
        { label: '到时间了就汇报', value: 2 },
        { label: '主动同步进度，让所有人都清楚状态', value: 3 },
      ],
    },
    {
      id: 'Ac3_q36', dim: 'Ac3',
      text: '手上有三件同等重要的事互相打架，你？',
      options: [
        { label: '三个都不想动，先刷会儿手机冷静一下', value: 1 },
        { label: '挑一个先做着', value: 2 },
        { label: '分配时间块，三个交替推进，绝不空转', value: 3 },
      ],
    },
    {
      id: 'Ac3_q37', dim: 'Ac3',
      text: '你在一天中什么时段效率最高？你会利用这个规律吗？',
      options: [
        { label: '我全天都是低效时段，规律不存在的', value: 1 },
        { label: '知道但不一定能执行', value: 2 },
        { label: '精确掌握自己的节律，黄金时间只做核心任务', value: 3 },
      ],
    },
    {
      id: 'Ac3_q38', dim: 'Ac3',
      text: '周末你通常是什么状态？',
      options: [
        { label: '躺尸两天，周一满血上线（bushi', value: 1 },
        { label: '休息为主，偶尔处理点事情', value: 2 },
        { label: '周末也有计划，充电和执行两不误', value: 3 },
      ],
    },
    {
      id: 'Ac3_q39', dim: 'Ac3',
      text: '早上起床后你的第一件事是？',
      options: [
        { label: '刷手机，一刷就是半小时', value: 1 },
        { label: '洗漱吃早饭，正常开启', value: 2 },
        { label: '按照晨间routine执行，每一步都有安排', value: 3 },
      ],
    },
    {
      id: 'Ac3_q40', dim: 'Ac3',
      text: '睡前你通常在做什么？',
      options: [
        { label: '刷手机到凌晨两点，然后后悔，明天继续', value: 1 },
        { label: '看会儿手机，困了就睡', value: 2 },
        { label: '固定时间放下手机，复盘一天后入睡', value: 3 },
      ],
    },
  ],

  // ═══════════ So1 社交主动性 ═══════════
  So1: [
    {
      id: 'So1_q1', dim: 'So1',
      text: '网友邀请你线下面基，你的想法？',
      options: [
        { label: '网上冲冲浪就够了，见面是不可能的', value: 1 },
        { label: '看关系远近，合得来就去', value: 2 },
        { label: '好耶！我还要精心打扮一番', value: 3 },
      ],
    },
    {
      id: 'So1_q2', dim: 'So1',
      text: '朋友带了个你不认识的人来聚会，你？',
      options: [
        { label: '生人勿近，全程社恐', value: 1 },
        { label: '对方聊我就聊，不聊也无所谓', value: 2 },
        { label: '朋友的朋友就是我的朋友！开聊！', value: 3 },
      ],
    },
    {
      id: 'So1_q3', dim: 'So1',
      text: '公司团建，一群不太熟的同事，你？',
      options: [
        { label: '找个角落蹲着等结束', value: 1 },
        { label: '有人来就聊，不来就安静待着', value: 2 },
        { label: '主动找话题，团建就是用来social的', value: 3 },
      ],
    },
    {
      id: 'So1_q4', dim: 'So1',
      text: '电梯里只有你和一个邻居，你会？',
      options: [
        { label: '掏出手机假装看消息', value: 1 },
        { label: '微笑点个头', value: 2 },
        { label: '"哎今天天气不错啊"主动开聊', value: 3 },
      ],
    },
    {
      id: 'So1_q5', dim: 'So1',
      text: '你到了一个全是陌生人的派对，你会？',
      options: [
        { label: '找到食物区站着不动，等派对结束', value: 1 },
        { label: '等有人来搭话', value: 2 },
        { label: '主动出击，不交三个朋友不走', value: 3 },
      ],
    },
    {
      id: 'So1_q6', dim: 'So1',
      text: '有个很想认识的人但没有理由搭话，你？',
      options: [
        { label: '在心里演练了一百遍然后还是没上去', value: 1 },
        { label: '找个合适的时机再说', value: 2 },
        { label: '直接走过去，理由可以现编', value: 3 },
      ],
    },
    {
      id: 'So1_q7', dim: 'So1',
      text: '周末想出去玩但没人约你，你会？',
      options: [
        { label: '那就在家躺着吧，主动约人太社恐了', value: 1 },
        { label: '发个朋友圈试探一下', value: 2 },
        { label: '直接群里喊一嗓子"谁有空出来浪"', value: 3 },
      ],
    },
    {
      id: 'So1_q8', dim: 'So1',
      text: '一群朋友在热聊，你想加入但插不上话，你？',
      options: [
        { label: '站旁边安静围观，像个人形背景板', value: 1 },
        { label: '等有个间隙再加入', value: 2 },
        { label: '直接插嘴，有什么不好意思的', value: 3 },
      ],
    },
    {
      id: 'So1_q9', dim: 'So1',
      text: '你在社交媒体上的活跃度？',
      options: [
        { label: '潜水王者，从不发动态从不评论', value: 1 },
        { label: '偶尔点个赞留个言', value: 2 },
        { label: '日更选手，评论区的常客', value: 3 },
      ],
    },
    {
      id: 'So1_q10', dim: 'So1',
      text: '路上有人拿着地图一脸懵逼，你？',
      options: [
        { label: '假装没看到，快步走过', value: 1 },
        { label: '如果ta开口问我就帮忙', value: 2 },
        { label: '主动上前"你好，需要帮忙吗？"', value: 3 },
      ],
    },
    {
      id: 'So1_q11', dim: 'So1',
      text: '刚到一个新城市，一个人都不认识，你会怎么交朋友？',
      options: [
        { label: '不交，我和WiFi就够了', value: 1 },
        { label: '通过同事/同学慢慢认识', value: 2 },
        { label: '主动约邻居/加本地社群/报兴趣班', value: 3 },
      ],
    },
    {
      id: 'So1_q12', dim: 'So1',
      text: '有个好久没联系的老朋友，你会主动联系吗？',
      options: [
        { label: '不会，万一人家已经忘了我多尴尬', value: 1 },
        { label: '想起来了可能会发个消息', value: 2 },
        { label: '直接打电话"兄弟最近咋样"', value: 3 },
      ],
    },
    {
      id: 'So1_q13', dim: 'So1',
      text: '行业交流会/展会，你的社交模式？',
      options: [
        { label: '找个角落充电然后提前溜了', value: 1 },
        { label: '有搭话的就聊聊', value: 2 },
        { label: '主动递名片，每个展位都要聊一圈', value: 3 },
      ],
    },
    {
      id: 'So1_q14', dim: 'So1',
      text: '在医院/银行排队等号的时候，你会跟旁边的人聊天吗？',
      options: [
        { label: '绝对不会，戴上耳机建立结界', value: 1 },
        { label: '如果对方先说话我就回应', value: 2 },
        { label: '可能会吐槽一句"今天好多人啊"然后聊起来', value: 3 },
      ],
    },
    {
      id: 'So1_q15', dim: 'So1',
      text: '组织朋友聚会/出游这种事，你？',
      options: [
        { label: '参加都懒得参加，组织就更不可能了', value: 1 },
        { label: '别人组织我去', value: 2 },
        { label: '我就是那个永远在拉群建表格的人', value: 3 },
      ],
    },
    {
      id: 'So1_q16', dim: 'So1',
      text: '搬到新小区了，你会主动认识邻居吗？',
      options: [
        { label: '住了三年不知道隔壁住的是人是鬼', value: 1 },
        { label: '碰到了会打个招呼', value: 2 },
        { label: '搬家第一天就去敲门自我介绍', value: 3 },
      ],
    },
    {
      id: 'So1_q17', dim: 'So1',
      text: '路过一个人穿了件很酷的衣服/包，你会？',
      options: [
        { label: '默默欣赏然后走开', value: 1 },
        { label: '在心里夸一下', value: 2 },
        { label: '直接走过去说"你这个也太好看了吧在哪买的"', value: 3 },
      ],
    },
    {
      id: 'So1_q18', dim: 'So1',
      text: '你认识了一个不错的人，想深入交往，你会？',
      options: [
        { label: '等对方来找我吧，主动太累了', value: 1 },
        { label: '偶尔约一次', value: 2 },
        { label: '主动约饭约咖啡，把关系拿下', value: 3 },
      ],
    },
    {
      id: 'So1_q19', dim: 'So1',
      text: '你是那个先发微信/先打电话的人吗？',
      options: [
        { label: '从不，等别人找我就行', value: 1 },
        { label: '偶尔会先发', value: 2 },
        { label: '当然，主动权在我手里', value: 3 },
      ],
    },
    {
      id: 'So1_q20', dim: 'So1',
      text: '有人邀请你去你家办聚会/请客，你？',
      options: [
        { label: '我家？不行不行不行', value: 1 },
        { label: '偶尔可以', value: 2 },
        { label: '欢迎！我还会做饭招待大家', value: 3 },
      ],
    },
    {
      id: 'So1_q21', dim: 'So1',
      text: '有个新开的兴趣社团/俱乐部，你会主动报名吗？',
      options: [
        { label: '不会，我的兴趣就是不社交', value: 1 },
        { label: '看看有没有认识的人一起去', value: 2 },
        { label: '直接报名！认识新朋友的好机会', value: 3 },
      ],
    },
    {
      id: 'So1_q22', dim: 'So1',
      text: '需要有人站出来当活动负责人/主持人，你？',
      options: [
        { label: '低头低头低头，千万别选我', value: 1 },
        { label: '如果没人做我可以勉强上', value: 2 },
        { label: '我来！这种事交给我', value: 3 },
      ],
    },
    {
      id: 'So1_q23', dim: 'So1',
      text: '开会/小组讨论的时候，你说话的频率？',
      options: [
        { label: '全程静音模式，除非被点名', value: 1 },
        { label: '有想法会说，没想法就听', value: 2 },
        { label: '主动发言，有话就说不憋着', value: 3 },
      ],
    },
    {
      id: 'So1_q24', dim: 'So1',
      text: '朋友说"下次一起玩啊"但没定具体时间，你会？',
      options: [
        { label: '等ta定吧，反正"下次"约等于"永远不"', value: 1 },
        { label: '过几天问问', value: 2 },
        { label: '直接回"行，这周六怎么样？"', value: 3 },
      ],
    },
    {
      id: 'So1_q25', dim: 'So1',
      text: '冷场了，所有人都不说话，你？',
      options: [
        { label: '跟着一起沉默，享受尴尬', value: 1 },
        { label: '尴尬地笑笑', value: 2 },
        { label: '"话说你们看了那个XX吗？"主动破冰', value: 3 },
      ],
    },
    {
      id: 'So1_q26', dim: 'So1',
      text: '在景区偶遇了一个你很喜欢的博主/明星，你？',
      options: [
        { label: '远远偷拍然后溜了', value: 1 },
        { label: '犹豫半天可能鼓起勇气过去', value: 2 },
        { label: '直接冲过去"你好我是你粉丝！"', value: 3 },
      ],
    },
    {
      id: 'So1_q27', dim: 'So1',
      text: '一个人出去旅行，你会在路上主动交朋友吗？',
      options: [
        { label: '享受独处，不需要旅途社交', value: 1 },
        { label: '如果遇到聊得来的就聊聊', value: 2 },
        { label: '旅行的意义就是认识新朋友，开聊！', value: 3 },
      ],
    },
    {
      id: 'So1_q28', dim: 'So1',
      text: '失联很久的朋友突然加你微信，你的反应？',
      options: [
        { label: '犹豫要不要通过，怕尴尬', value: 1 },
        { label: '通过了简单寒暄几句', value: 2 },
        { label: '秒通过还主动约见面叙旧', value: 3 },
      ],
    },
    {
      id: 'So1_q29', dim: 'So1',
      text: '你需要跟一个人谈一件很严肃/敏感的事，你？',
      options: [
        { label: '能拖就拖，最好问题自己消失', value: 1 },
        { label: '鼓起勇气但要准备很久', value: 2 },
        { label: '直接约个时间当面说，别耗着', value: 3 },
      ],
    },
    {
      id: 'So1_q30', dim: 'So1',
      text: '群里来了个新人，你会？',
      options: [
        { label: '没注意到有新人进群', value: 1 },
        { label: '如果别人欢迎了我也跟着说一句', value: 2 },
        { label: '第一个发"欢迎欢迎！有什么问题找我"', value: 3 },
      ],
    },
    {
      id: 'So1_q31', dim: 'So1',
      text: '看到有人在搬重东西/拎很多袋子，你？',
      options: [
        { label: '假装没看到，避免社交', value: 1 },
        { label: '心里想帮但没行动', value: 2 },
        { label: '直接上去"我帮你拿一下吧"', value: 3 },
      ],
    },
    {
      id: 'So1_q32', dim: 'So1',
      text: '你在网上的论坛/社区/群组里的角色？',
      options: [
        { label: '纯潜水，从不冒泡', value: 1 },
        { label: '偶尔回复别人的帖子', value: 2 },
        { label: '活跃分子，发帖回帖都是我', value: 3 },
      ],
    },
    {
      id: 'So1_q33', dim: 'So1',
      text: '上台演讲/做presentation的机会来了，你？',
      options: [
        { label: '社死预警，能推就推', value: 1 },
        { label: '有准备的话可以上', value: 2 },
        { label: '好机会！我本来就想表达', value: 3 },
      ],
    },
    {
      id: 'So1_q34', dim: 'So1',
      text: '朋友让你带头组织一个活动（聚餐/出游/团建），你？',
      options: [
        { label: '别找我，我是被组织的命', value: 1 },
        { label: '行吧，简单安排一下', value: 2 },
        { label: '没问题！行程表已经在脑子里了', value: 3 },
      ],
    },
    {
      id: 'So1_q35', dim: 'So1',
      text: '参加婚礼，一桌人都不认识，你？',
      options: [
        { label: '低头吃饭，吃完走人', value: 1 },
        { label: '跟旁边的人简单聊几句', value: 2 },
        { label: '敬酒聊天加微信，一桌人都混熟了', value: 3 },
      ],
    },
    {
      id: 'So1_q36', dim: 'So1',
      text: '买东西的时候跟店员/服务员聊天，你？',
      options: [
        { label: '能自助结账就自助，不想开口', value: 1 },
        { label: '正常交流，不多说', value: 2 },
        { label: '聊到人家叫我常客，下次还给我打折', value: 3 },
      ],
    },
    {
      id: 'So1_q37', dim: 'So1',
      text: '被人拒绝/冷脸之后，你下次还会主动社交吗？',
      options: [
        { label: '不了不了，一朝被蛇咬十年怕社交', value: 1 },
        { label: '缓一缓再说', value: 2 },
        { label: '无所谓，这个不行换下一个', value: 3 },
      ],
    },
    {
      id: 'So1_q38', dim: 'So1',
      text: '需要cold reach（冷启动联系陌生人谈合作/求职），你？',
      options: [
        { label: '打字手都在抖，发了三天没发出去', value: 1 },
        { label: '鼓起勇气发了，等回复时很紧张', value: 2 },
        { label: '大方发出去，被拒了再找下一个', value: 3 },
      ],
    },
    {
      id: 'So1_q39', dim: 'So1',
      text: 'KTV/蹦迪的舞池里，你？',
      options: [
        { label: '坐在角落玩手机等结束', value: 1 },
        { label: '被朋友拉起来勉强动一动', value: 2 },
        { label: '第一个冲上去，舞池C位是我的', value: 3 },
      ],
    },
    {
      id: 'So1_q40', dim: 'So1',
      text: '你对"社交恐惧"和"社交牛逼症"的自我定位是？',
      options: [
        { label: '重度社恐，已确诊，无需复查', value: 1 },
        { label: '看场合，有时恐有时牛', value: 2 },
        { label: '社牛本牛，见人就来劲', value: 3 },
      ],
    },
  ],

  // ═══════════ So2 人际边界感 ═══════════
  So2: [
    {
      id: 'So2_q1', dim: 'So2',
      text: '我和人相处主打一个电子围栏，靠太近会自动报警',
      options: [
        { label: '完全认同，请保持两米距离', value: 3 },
        { label: '看人', value: 2 },
        { label: '不认同，我喜欢亲密感', value: 1 },
      ],
    },
    {
      id: 'So2_q2', dim: 'So2',
      text: '我渴望和信任的人关系非常密切，密切到像连体婴儿那种',
      options: [
        { label: '是的！那才叫感情好', value: 1 },
        { label: '密切可以但别太夸张', value: 2 },
        { label: '不要，窒息', value: 3 },
      ],
    },
    {
      id: 'So2_q3', dim: 'So2',
      text: '一个不太熟的人突然对你特别热情，你的第一反应？',
      options: [
        { label: '太好了！又多了个朋友', value: 1 },
        { label: '有点奇怪但先看看', value: 2 },
        { label: '后退，你要干什么', value: 3 },
      ],
    },
    {
      id: 'So2_q4', dim: 'So2',
      text: '好朋友未经允许翻了你手机，你？',
      options: [
        { label: '随便看，好朋友有什么不能看的', value: 1 },
        { label: '不太爽但不好意思说', value: 2 },
        { label: '"你在干什么？"立刻回收手机', value: 3 },
      ],
    },
    {
      id: 'So2_q5', dim: 'So2',
      text: '你的微信好友分组策略？',
      options: [
        { label: '没有分组，大家都是朋友', value: 1 },
        { label: '简单分几个组', value: 2 },
        { label: '分组精细到像军事部署', value: 3 },
      ],
    },
    {
      id: 'So2_q6', dim: 'So2',
      text: '别人帮了你一个忙，你？',
      options: [
        { label: '太感动了，以后ta就是我的人了', value: 1 },
        { label: '感谢并找机会回报', value: 2 },
        { label: '记下来，一定要还清，不想欠人情', value: 3 },
      ],
    },
    {
      id: 'So2_q7', dim: 'So2',
      text: '好朋友问你"你那个秘密能跟我说说吗"，你？',
      options: [
        { label: '好姐妹/兄弟没有秘密，全盘托出', value: 1 },
        { label: '看是什么秘密再决定', value: 2 },
        { label: '秘密就是秘密，亲妈来了也不说', value: 3 },
      ],
    },
    {
      id: 'So2_q8', dim: 'So2',
      text: '好朋友找你借钱（金额不小），你？',
      options: [
        { label: '二话不说转过去，朋友嘛', value: 1 },
        { label: '问清楚原因再决定', value: 2 },
        { label: '钱的事最好别找我，友谊和钱分开', value: 3 },
      ],
    },
    {
      id: 'So2_q9', dim: 'So2',
      text: '爸妈对你的恋爱/职业指手画脚，你？',
      options: [
        { label: '他们说得对，听爸妈的', value: 1 },
        { label: '听听意见但自己做决定', value: 2 },
        { label: '我的人生我做主，请尊重边界', value: 3 },
      ],
    },
    {
      id: 'So2_q10', dim: 'So2',
      text: '朋友请你帮个忙但你真的不想帮，你？',
      options: [
        { label: '不想帮也帮了，不好意思拒绝', value: 1 },
        { label: '委婉地表示有困难', value: 2 },
        { label: '直说"不好意思这次不行"，拒绝得明明白白', value: 3 },
      ],
    },
    {
      id: 'So2_q11', dim: 'So2',
      text: '有人问你工资/年终奖多少，你？',
      options: [
        { label: '直接说，又不是什么秘密', value: 1 },
        { label: '含糊地说个大概范围', value: 2 },
        { label: '这是我的隐私，笑着岔开话题', value: 3 },
      ],
    },
    {
      id: 'So2_q12', dim: 'So2',
      text: '你会跟朋友分享自己最近的焦虑/崩溃吗？',
      options: [
        { label: '会，关系好就要互相分担', value: 1 },
        { label: '看关系远近和心情', value: 2 },
        { label: '不会，自己的情绪自己消化', value: 3 },
      ],
    },
    {
      id: 'So2_q13', dim: 'So2',
      text: '不太熟的人跟你勾肩搭背/拍你后背，你？',
      options: [
        { label: '无所谓，大家开心就好', value: 1 },
        { label: '有点不适但忍着', value: 2 },
        { label: '身体本能后退，请保持物理距离', value: 3 },
      ],
    },
    {
      id: 'So2_q14', dim: 'So2',
      text: '朋友老是占用你的休息时间找你聊天/倾诉，你？',
      options: [
        { label: '没关系，朋友需要我的时候我就在', value: 1 },
        { label: '偶尔可以但经常就有点累', value: 2 },
        { label: '会明确说"现在不方便，我们改时间聊"', value: 3 },
      ],
    },
    {
      id: 'So2_q15', dim: 'So2',
      text: '有人动不动就跟你倒情绪垃圾（负能量），你？',
      options: [
        { label: '照单全收，做个好听众', value: 1 },
        { label: '听一阵子但会有点累', value: 2 },
        { label: '委婉打断，我不是你的情绪垃圾桶', value: 3 },
      ],
    },
    {
      id: 'So2_q16', dim: 'So2',
      text: '朋友们在八卦别人的事，你？',
      options: [
        { label: '加入！八卦使我快乐', value: 1 },
        { label: '听听但不主动传播', value: 2 },
        { label: '不参与，别人的私事跟我无关', value: 3 },
      ],
    },
    {
      id: 'So2_q17', dim: 'So2',
      text: '你在社交媒体上会公开发定位/日常/心情吗？',
      options: [
        { label: '会，生活就是要分享', value: 1 },
        { label: '偶尔发，但不会太详细', value: 2 },
        { label: '不发，我的行踪不需要全世界知道', value: 3 },
      ],
    },
    {
      id: 'So2_q18', dim: 'So2',
      text: '你会把家门钥匙/密码给好朋友吗？',
      options: [
        { label: '当然，好朋友随时来', value: 1 },
        { label: '非常信任的一两个人可以', value: 2 },
        { label: '不会，我的空间是我的城堡', value: 3 },
      ],
    },
    {
      id: 'So2_q19', dim: 'So2',
      text: '朋友没经过你同意就用了你的东西（化妆品/充电器/零食），你？',
      options: [
        { label: '都是朋友，用就用了', value: 1 },
        { label: '有点不爽但算了', value: 2 },
        { label: '下次请先问我，这是基本尊重', value: 3 },
      ],
    },
    {
      id: 'So2_q20', dim: 'So2',
      text: '你会跟朋友吐槽自己的感情问题吗？',
      options: [
        { label: '会，事无巨细全都说', value: 1 },
        { label: '说个大概，细节不说', value: 2 },
        { label: '两个人的事不需要第三个人知道', value: 3 },
      ],
    },
    {
      id: 'So2_q21', dim: 'So2',
      text: '家人干预你的个人决定（比如几点睡/吃什么/交什么朋友），你？',
      options: [
        { label: '他们也是为我好，听着吧', value: 1 },
        { label: '参考一下但最终自己决定', value: 2 },
        { label: '明确告知"这是我的事，请不要干涉"', value: 3 },
      ],
    },
    {
      id: 'So2_q22', dim: 'So2',
      text: '你在公司会跟同事聊私生活吗？',
      options: [
        { label: '会，同事也是朋友嘛', value: 1 },
        { label: '聊一些不敏感的', value: 2 },
        { label: '工作是工作，私事一律不谈', value: 3 },
      ],
    },
    {
      id: 'So2_q23', dim: 'So2',
      text: '你的社交账号隐私设置是？',
      options: [
        { label: '全公开，来者不拒', value: 1 },
        { label: '部分可见，分组管理', value: 2 },
        { label: '仅好友可见，陌生人一律屏蔽', value: 3 },
      ],
    },
    {
      id: 'So2_q24', dim: 'So2',
      text: '别人问你很私人的问题（恋爱状况/家庭背景），你？',
      options: [
        { label: '都可以聊，没什么不能说的', value: 1 },
        { label: '看关系远近决定说多少', value: 2 },
        { label: '微笑反问"你为什么想知道？"', value: 3 },
      ],
    },
    {
      id: 'So2_q25', dim: 'So2',
      text: '前任想跟你做朋友/保持联系，你？',
      options: [
        { label: '可以啊，分手了也是朋友', value: 1 },
        { label: '保持基本礼貌就行', value: 2 },
        { label: '删除拉黑一条龙，过去了就别回头', value: 3 },
      ],
    },
    {
      id: 'So2_q26', dim: 'So2',
      text: '不太熟的人送你贵重礼物，你？',
      options: [
        { label: '开心收下，觉得对方很好', value: 1 },
        { label: '有点不安但还是收了', value: 2 },
        { label: '不收，无功不受禄，怕有附加条件', value: 3 },
      ],
    },
    {
      id: 'So2_q27', dim: 'So2',
      text: '你能接受跟朋友共享一份食物/从你碗里夹菜吗？',
      options: [
        { label: '当然可以，食物一起吃才香', value: 1 },
        { label: '关系好的可以', value: 2 },
        { label: '请用公筷或者自己点一份，谢谢', value: 3 },
      ],
    },
    {
      id: 'So2_q28', dim: 'So2',
      text: '你的日记/手账/备忘录，会让别人看吗？',
      options: [
        { label: '随便看，我没什么不能公开的', value: 1 },
        { label: '特别信任的人可以', value: 2 },
        { label: '这是我的绝对禁区，任何人都不行', value: 3 },
      ],
    },
    {
      id: 'So2_q29', dim: 'So2',
      text: '你会跟朋友共享实时位置吗？',
      options: [
        { label: '会，安全起见互相分享挺好', value: 1 },
        { label: '特殊情况下会开', value: 2 },
        { label: '不会，我的行踪是我的隐私', value: 3 },
      ],
    },
    {
      id: 'So2_q30', dim: 'So2',
      text: '聚会到很晚了你想走但大家还在嗨，你？',
      options: [
        { label: '继续陪着，不想扫大家的兴', value: 1 },
        { label: '再待一会儿然后找借口走', value: 2 },
        { label: '直接说"我先撤了"，不需要解释', value: 3 },
      ],
    },
    {
      id: 'So2_q31', dim: 'So2',
      text: '饭局上有人一直劝你喝酒，你？',
      options: [
        { label: '好吧好吧，干了', value: 1 },
        { label: '象征性地喝一点', value: 2 },
        { label: '"我不喝"，三个字解决，不接受任何劝说', value: 3 },
      ],
    },
    {
      id: 'So2_q32', dim: 'So2',
      text: '别人给你提建议/指导你的人生，你没问过ta意见，你？',
      options: [
        { label: '感谢ta的关心，认真听', value: 1 },
        { label: '表面点头心里过滤', value: 2 },
        { label: '"谢谢但我没有问你的意见"', value: 3 },
      ],
    },
    {
      id: 'So2_q33', dim: 'So2',
      text: '下班后/周末领导给你发工作消息，你？',
      options: [
        { label: '秒回，随时待命', value: 1 },
        { label: '看看内容再决定回不回', value: 2 },
        { label: '工作时间结束了，明天再说', value: 3 },
      ],
    },
    {
      id: 'So2_q34', dim: 'So2',
      text: '你能接受朋友不打招呼直接来你家吗？',
      options: [
        { label: '欢迎！门随时为你敞开', value: 1 },
        { label: '偶尔可以但最好提前说', value: 2 },
        { label: '请务必提前预约，突击访问我会炸', value: 3 },
      ],
    },
    {
      id: 'So2_q35', dim: 'So2',
      text: '你会把自己的视频会员/音乐会员密码分享给朋友用吗？',
      options: [
        { label: '当然，一个人用也是用', value: 1 },
        { label: '关系特别好的可以', value: 2 },
        { label: '自己买自己的，我不喜欢共享账号', value: 3 },
      ],
    },
    {
      id: 'So2_q36', dim: 'So2',
      text: '有个朋友天天找你聊天、秒回消息、动态全部点赞，你？',
      options: [
        { label: '太好了，被重视的感觉真棒', value: 1 },
        { label: '有点感动但也有点压力', value: 2 },
        { label: '窒息了，请给我一点空间好吗', value: 3 },
      ],
    },
    {
      id: 'So2_q37', dim: 'So2',
      text: '过年亲戚聚会各种灵魂拷问（有对象没/工资多少/什么时候生娃），你？',
      options: [
        { label: '老实回答，他们也是关心我', value: 1 },
        { label: '笑着糊弄过去', value: 2 },
        { label: '正面怼回去"这是我的隐私哦"', value: 3 },
      ],
    },
    {
      id: 'So2_q38', dim: 'So2',
      text: '亲戚总说"你应该怎样怎样"，你内心的反应？',
      options: [
        { label: '他们说的有道理，我考虑一下', value: 1 },
        { label: '表面嗯嗯嗯，心里左耳进右耳出', value: 2 },
        { label: '直接表明立场"我有自己的规划，谢谢关心"', value: 3 },
      ],
    },
    {
      id: 'So2_q39', dim: 'So2',
      text: '同事经常在工作时间跟你聊私事/八卦，影响你效率，你？',
      options: [
        { label: '跟着聊呗，工作又跑不了', value: 1 },
        { label: '有点烦但不好意思打断', value: 2 },
        { label: '"不好意思我先忙，回头再聊"', value: 3 },
      ],
    },
    {
      id: 'So2_q40', dim: 'So2',
      text: '你觉得"人和人之间最好的关系"是？',
      options: [
        { label: '不分你我，亲密无间', value: 1 },
        { label: '亲密但有分寸', value: 2 },
        { label: '亲近而独立，保持清爽的距离感', value: 3 },
      ],
    },
  ],

  // ═══════════ So3 表达与真实度 ═══════════
  So3: [
    {
      id: 'So3_q1', dim: 'So3',
      text: '你对一件事有不同的、负面的看法，但最后没说。通常是因为？',
      options: [
        { label: '我一般会直接说出来', value: 1 },
        { label: '碍于面子或关系没说', value: 2 },
        { label: '不想暴露自己阴暗的一面', value: 3 },
      ],
    },
    {
      id: 'So3_q2', dim: 'So3',
      text: '我在不同人面前会表现出不一样的自己',
      options: [
        { label: '不会，我一直是同一个NPC', value: 1 },
        { label: '会有些微调', value: 2 },
        { label: '会，我是千面人', value: 3 },
      ],
    },
    {
      id: 'So3_q3', dim: 'So3',
      text: '你在老板面前和好朋友面前，说话风格差别大吗？',
      options: [
        { label: '差不多，我就这样', value: 1 },
        { label: '会调整但本质没变', value: 2 },
        { label: '完全是两个人，切换丝滑', value: 3 },
      ],
    },
    {
      id: 'So3_q4', dim: 'So3',
      text: '朋友问你"我新发型好看吗？"（其实很丑），你？',
      options: [
        { label: '"兄弟说实话有点抽象"', value: 1 },
        { label: '"挺特别的，要不试试别的风格？"', value: 2 },
        { label: '"好看好看！太适合你了！"', value: 3 },
      ],
    },
    {
      id: 'So3_q5', dim: 'So3',
      text: '你发朋友圈时会精心筛选文案和照片吗？',
      options: [
        { label: '不会，想发就发，素颜直出', value: 1 },
        { label: '会简单修一下', value: 2 },
        { label: '每条朋友圈都是经过审核委员会通过的', value: 3 },
      ],
    },
    {
      id: 'So3_q6', dim: 'So3',
      text: '你觉得"做自己"这件事？',
      options: [
        { label: '我一直在做自己，不装', value: 1 },
        { label: '场合不同适当调整也很正常', value: 2 },
        { label: '做自己？我有好几个自己呢', value: 3 },
      ],
    },
    {
      id: 'So3_q7', dim: 'So3',
      text: '聚会上有人说了个不好笑的笑话，你？',
      options: [
        { label: '面无表情说"这不好笑"', value: 1 },
        { label: '礼貌性微笑', value: 2 },
        { label: '哈哈哈哈（专业假笑三十年）', value: 3 },
      ],
    },
    {
      id: 'So3_q8', dim: 'So3',
      text: '在公共场合感动到想哭（看电影/听演唱会），你？',
      options: [
        { label: '哭就哭了，我的眼泪不需要掩饰', value: 1 },
        { label: '偷偷擦一下不让别人看到', value: 2 },
        { label: '强忍住，不能在外面这么失态', value: 3 },
      ],
    },
    {
      id: 'So3_q9', dim: 'So3',
      text: '别人聊到一个你完全不懂的话题，你会？',
      options: [
        { label: '"这个我不懂诶，能给我讲讲吗？"', value: 1 },
        { label: '默默百度一下再加入', value: 2 },
        { label: '跟着点头附和，假装自己也略懂', value: 3 },
      ],
    },
    {
      id: 'So3_q10', dim: 'So3',
      text: '大家都觉得某个电影好看，但你觉得烂透了，你？',
      options: [
        { label: '"说实话我觉得很一般"', value: 1 },
        { label: '"还行吧，不是我的类型"', value: 2 },
        { label: '"是挺好看的！"（心里疯狂吐槽）', value: 3 },
      ],
    },
    {
      id: 'So3_q11', dim: 'So3',
      text: '当众做了件很丢脸的事（比如摔了一跤），你？',
      options: [
        { label: '自嘲一句"地面太想我了"然后笑着爬起来', value: 1 },
        { label: '尴尬地笑笑快步走开', value: 2 },
        { label: '假装什么都没发生，面不改色继续走', value: 3 },
      ],
    },
    {
      id: 'So3_q12', dim: 'So3',
      text: '内心真实想法和场面话完全不同的时候，你通常？',
      options: [
        { label: '说真话，不管别人怎么想', value: 1 },
        { label: '大部分说真话但会包装一下', value: 2 },
        { label: '场面话张口就来，真实想法打死不说', value: 3 },
      ],
    },
    {
      id: 'So3_q13', dim: 'So3',
      text: '你的交友软件/社交简介上的内容有多真实？',
      options: [
        { label: '完全真实，包括我的缺点', value: 1 },
        { label: '真实但选了最好的一面展示', value: 2 },
        { label: '精心打造的完美人设', value: 3 },
      ],
    },
    {
      id: 'So3_q14', dim: 'So3',
      text: '写简历的时候，你？',
      options: [
        { label: '是什么写什么，不夸大不缩小', value: 1 },
        { label: '适当美化，但不说假话', value: 2 },
        { label: '包装到亲妈都不认识，这叫专业', value: 3 },
      ],
    },
    {
      id: 'So3_q15', dim: 'So3',
      text: '你表达情绪的方式是？',
      options: [
        { label: '喜怒哀乐全写脸上，藏不住', value: 1 },
        { label: '看场合决定表达多少', value: 2 },
        { label: '内心戏丰富但脸上永远是😐', value: 3 },
      ],
    },
    {
      id: 'So3_q16', dim: 'So3',
      text: '领导/老师说了个你觉得有问题的观点，你？',
      options: [
        { label: '直接提出不同意见', value: 1 },
        { label: '私下找机会委婉说', value: 2 },
        { label: '不说，人家是领导/老师', value: 3 },
      ],
    },
    {
      id: 'So3_q17', dim: 'So3',
      text: '犯了个错被别人发现了，你？',
      options: [
        { label: '"确实是我的锅，我来改"', value: 1 },
        { label: '承认但会找一些客观原因解释', value: 2 },
        { label: '尽量把责任分散一下，不能全算我头上', value: 3 },
      ],
    },
    {
      id: 'So3_q18', dim: 'So3',
      text: '跟好朋友倾诉脆弱的一面，你？',
      options: [
        { label: '很自然，朋友就是用来分担的', value: 1 },
        { label: '要看关系多深', value: 2 },
        { label: '不会，我不想让别人看到我弱的样子', value: 3 },
      ],
    },
    {
      id: 'So3_q19', dim: 'So3',
      text: '你觉得自己的"社交人格"和"独处人格"差距大吗？',
      options: [
        { label: '没差别，什么时候都一样', value: 1 },
        { label: '有一点差别', value: 2 },
        { label: '完全是两个人，切号般丝滑', value: 3 },
      ],
    },
    {
      id: 'So3_q20', dim: 'So3',
      text: '你会有意识地在不同人面前切换说话方式/性格吗？',
      options: [
        { label: '不会，我对谁都一个样', value: 1 },
        { label: '多少会调整一点', value: 2 },
        { label: '当然，不同场景不同策略', value: 3 },
      ],
    },
    {
      id: 'So3_q21', dim: 'So3',
      text: '别人夸你但你觉得夸过头了，你？',
      options: [
        { label: '"没有没有，我还差得远"说实话', value: 1 },
        { label: '"谢谢"然后岔开话题', value: 2 },
        { label: '欣然接受并补充几个案例论证（虽然心里知道没那么好）', value: 3 },
      ],
    },
    {
      id: 'So3_q22', dim: 'So3',
      text: '你生气的时候会直接表达出来吗？',
      options: [
        { label: '会，不爽就说不爽', value: 1 },
        { label: '冷处理一段时间再说', value: 2 },
        { label: '表面微笑心里已经骂了三百遍', value: 3 },
      ],
    },
    {
      id: 'So3_q23', dim: 'So3',
      text: '在职场/学校遇到困难，你会向别人展示你的无助吗？',
      options: [
        { label: '会，不会的就问，不懂装懂更丢人', value: 1 },
        { label: '挣扎到一定程度才求助', value: 2 },
        { label: '打死也不让同事/同学看到我不行', value: 3 },
      ],
    },
    {
      id: 'So3_q24', dim: 'So3',
      text: '你清楚自己在社交中戴了多少"面具"吗？',
      options: [
        { label: '我不戴面具，所见即所得', value: 1 },
        { label: '知道有一点但觉得正常', value: 2 },
        { label: '非常清楚，面具库存充足，随时切换', value: 3 },
      ],
    },
    {
      id: 'So3_q25', dim: 'So3',
      text: '你对别人的事情真的感兴趣还是在装？',
      options: [
        { label: '感兴趣就认真听，不感兴趣就直说', value: 1 },
        { label: '大部分时候是真的感兴趣', value: 2 },
        { label: '职业假装感兴趣选手，嗯嗯嗯然后呢', value: 3 },
      ],
    },
    {
      id: 'So3_q26', dim: 'So3',
      text: '你会为了避免冲突而忍住不说自己的真实想法吗？',
      options: [
        { label: '不会，该说就说，冲突就冲突', value: 1 },
        { label: '看事情大小决定', value: 2 },
        { label: '经常，和平比真实更重要', value: 3 },
      ],
    },
    {
      id: 'So3_q27', dim: 'So3',
      text: '需要自我介绍/自我推销的时候，你？',
      options: [
        { label: '简单真实地说自己是谁', value: 1 },
        { label: '准备一下，适当包装', value: 2 },
        { label: '专业营销文案都写好了，卖人设是基本技能', value: 3 },
      ],
    },
    {
      id: 'So3_q28', dim: 'So3',
      text: '跟家人说真心话容易吗？',
      options: [
        { label: '容易，家人面前最真实', value: 1 },
        { label: '有些话能说有些话说不出口', value: 2 },
        { label: '反而最难，在家人面前装得最多', value: 3 },
      ],
    },
    {
      id: 'So3_q29', dim: 'So3',
      text: '说"我爱你"/"我想你"对你来说？',
      options: [
        { label: '很自然，想说就说', value: 1 },
        { label: '得看场合和对象', value: 2 },
        { label: '打字都要犹豫半天，说出口更不可能', value: 3 },
      ],
    },
    {
      id: 'So3_q30', dim: 'So3',
      text: '对朋友/同事的表现失望了，你会表达出来吗？',
      options: [
        { label: '会直接说，不喜欢憋着', value: 1 },
        { label: '暗示一下看对方能不能get到', value: 2 },
        { label: '不说，笑着消化', value: 3 },
      ],
    },
    {
      id: 'So3_q31', dim: 'So3',
      text: '你对别人的同情/共情是发自内心的还是表演的？',
      options: [
        { label: '发自内心的，我不会假装', value: 1 },
        { label: '大部分是真的，偶尔配合一下', value: 2 },
        { label: '很多时候是表演，已经形成肌肉记忆了', value: 3 },
      ],
    },
    {
      id: 'So3_q32', dim: 'So3',
      text: '你会在网上/朋友面前公开表达政治观点吗？',
      options: [
        { label: '会，有什么不敢说的', value: 1 },
        { label: '看场合和人群', value: 2 },
        { label: '绝不，这种敏感话题不碰', value: 3 },
      ],
    },
    {
      id: 'So3_q33', dim: 'So3',
      text: '你会向别人坦诚自己的宗教/信仰/三观吗？',
      options: [
        { label: '会，这是我的一部分', value: 1 },
        { label: '关系好的人知道', value: 2 },
        { label: '不会主动说，怕被judge', value: 3 },
      ],
    },
    {
      id: 'So3_q34', dim: 'So3',
      text: '别人问你"你钱够花吗/经济状况怎么样"，你？',
      options: [
        { label: '实话实说，穷就是穷', value: 1 },
        { label: '笼统回答"还行吧"', value: 2 },
        { label: '不管穷富都说"还好还好"，不暴露真实状况', value: 3 },
      ],
    },
    {
      id: 'So3_q35', dim: 'So3',
      text: '你会跟别人聊自己的心理健康状况吗？',
      options: [
        { label: '会，焦虑抑郁都可以说，不觉得丢人', value: 1 },
        { label: '跟特别亲近的人会说', value: 2 },
        { label: '不会，不想被贴标签或被同情', value: 3 },
      ],
    },
    {
      id: 'So3_q36', dim: 'So3',
      text: '你道歉的时候是真心的吗？',
      options: [
        { label: '是真心觉得自己错了才道歉', value: 1 },
        { label: '大部分是真心的', value: 2 },
        { label: '道歉只是社交技能，跟心里想的无关', value: 3 },
      ],
    },
    {
      id: 'So3_q37', dim: 'So3',
      text: '感谢别人的时候，你的真诚度？',
      options: [
        { label: '每次感谢都是真心实意的', value: 1 },
        { label: '大多数是真的，偶尔是客气', value: 2 },
        { label: '"谢谢"已经变成口头禅了，说完就忘', value: 3 },
      ],
    },
    {
      id: 'So3_q38', dim: 'So3',
      text: '你会主动分享自己的失败经历吗？',
      options: [
        { label: '会，失败了就是失败了，坦诚面对', value: 1 },
        { label: '看场合，有启发意义的会分享', value: 2 },
        { label: '不会，只展示成功的一面', value: 3 },
      ],
    },
    {
      id: 'So3_q39', dim: 'So3',
      text: '你的幽默风格是？',
      options: [
        { label: '经常自嘲，拿自己开涮最真实', value: 1 },
        { label: '看情况，什么类型都能来一点', value: 2 },
        { label: '主打优雅型幽默，不暴露自己的短板', value: 3 },
      ],
    },
    {
      id: 'So3_q40', dim: 'So3',
      text: '你在亲密关系里会直接说出自己的需求吗？',
      options: [
        { label: '会，不说对方怎么知道', value: 1 },
        { label: '有时候说有时候憋着', value: 2 },
        { label: '不说，靠对方猜，说了就不浪漫了', value: 3 },
      ],
    },
  ],
};

export const SPECIAL_QUESTIONS: SpecialQuestion[] = [
  {
    id: 'drink_gate_q1',
    kind: 'drink_gate',
    text: '你平时有什么爱好？',
    options: [
      { label: '吃喝拉撒', value: 1 },
      { label: '艺术爱好', value: 2 },
      { label: '饮酒', value: 3 },
      { label: '健身', value: 4 },
    ],
  },
  {
    id: 'drink_gate_q2',
    kind: 'drink_trigger',
    text: '你对饮酒的态度是？',
    options: [
      { label: '小酌怡情，喝不了太多', value: 1 },
      { label: '白酒灌保温杯当水喝，酒精令我信服', value: 2 },
    ],
  },
];
