import type { Question, SpecialQuestion } from '../types';

// 每维度 6-8 题，运行时随机选 2 题
// options.value: 1=低端, 2=中间, 3=高端

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
