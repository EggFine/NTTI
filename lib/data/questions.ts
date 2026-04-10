import type { Question, SpecialQuestion } from '../types';

// 每维度4-6题，运行时随机选2题
// options.value: 1=低端, 2=中间, 3=高端

export const QUESTION_BANK: Record<string, Question[]> = {
  S1: [
    {
      id: 'S1_q1', dim: 'S1',
      text: '我不仅是屌丝，我还是joker,我还是咸鱼，这辈子没谈过一场恋爱，胆怯又自卑，我的青春就是一场又一场的意淫，每一天幻想着我也能有一个女孩子和我一起压马路，一起逛街，一起玩，现实却是爆了父母金币，读了个烂学校，混日子之后找班上，没有理想，没有目标，没有能力的三无人员，每次看到你能在网上开屌丝的玩笑，我都想哭，我就是地底下的老鼠，透过下水井的缝隙，窥探地上的各种美好，每一次看到这种都是对我心灵的一次伤害，对我生存空间的一次压缩，求求哥们给我们这种小丑一点活路吧，我真的不想在白天把枕巾哭湿一大片',
      options: [
        { label: '我哭了。。', value: 1 },
        { label: '这是什么。。', value: 2 },
        { label: '这不是我！', value: 3 },
      ],
    },
    {
      id: 'S1_q2', dim: 'S1',
      text: '我不够好，周围的人都比我优秀',
      options: [
        { label: '确实', value: 1 },
        { label: '有时', value: 2 },
        { label: '不是', value: 3 },
      ],
    },
    {
      id: 'S1_q3', dim: 'S1',
      text: '别人无意间说了一句"你这样不太行"，你晚上躺在床上会？',
      options: [
        { label: '翻来覆去想一整晚，甚至失眠', value: 1 },
        { label: '会想一会儿，但不至于失眠', value: 2 },
        { label: '想一秒就翻篇了，关我什么事', value: 3 },
      ],
    },
    {
      id: 'S1_q4', dim: 'S1',
      text: '朋友发朋友圈晒工资/offer/旅游照，你的内心OS更接近？',
      options: [
        { label: '人家命好，我就是个废物', value: 1 },
        { label: '有点酸但还好，各有各的活法', value: 2 },
        { label: '挺好的，我也有我自己的节奏', value: 3 },
      ],
    },
    {
      id: 'S1_q5', dim: 'S1',
      text: '面试官问"你觉得你最大的优点是什么？"你的真实想法是？',
      options: [
        { label: '我有优点吗？让我编一个', value: 1 },
        { label: '有几个吧，但说不太出口', value: 2 },
        { label: '我能说出至少三个且真心觉得是', value: 3 },
      ],
    },
  ],
  S2: [
    {
      id: 'S2_q1', dim: 'S2',
      text: '我很清楚真正的自己是什么样的',
      options: [
        { label: '不认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '认同', value: 3 },
      ],
    },
    {
      id: 'S2_q2', dim: 'S2',
      text: '我内心有真正追求的东西',
      options: [
        { label: '不认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '认同', value: 3 },
      ],
    },
    {
      id: 'S2_q3', dim: 'S2',
      text: '如果有人问你"你到底想要什么"，你的第一反应是？',
      options: [
        { label: '说实话我也不知道', value: 1 },
        { label: '大概知道，但说不清楚', value: 2 },
        { label: '我可以给你列一张清单', value: 3 },
      ],
    },
    {
      id: 'S2_q4', dim: 'S2',
      text: '你会经常觉得"这不像真正的我在做的事"吗？',
      options: [
        { label: '经常，感觉一直在演', value: 1 },
        { label: '偶尔有这种感觉', value: 2 },
        { label: '很少，我做的事基本都是我想做的', value: 3 },
      ],
    },
    {
      id: 'S2_q5', dim: 'S2',
      text: '深夜emo的时候，你通常在想什么？',
      options: [
        { label: '我是谁？我在干嘛？人活着到底为了啥？', value: 1 },
        { label: '想一些具体的烦恼，比如工作或感情', value: 2 },
        { label: '我很少深夜emo，该睡觉睡觉', value: 3 },
      ],
    },
  ],
  S3: [
    {
      id: 'S3_q1', dim: 'S3',
      text: '我一定要不断往上爬、变得更厉害',
      options: [
        { label: '不认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '认同', value: 3 },
      ],
    },
    {
      id: 'S3_q2', dim: 'S3',
      text: '外人的评价对我来说无所吊谓。',
      options: [
        { label: '不认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '认同', value: 3 },
      ],
    },
    {
      id: 'S3_q3', dim: 'S3',
      text: '周末躺了两天什么都没干，你的感受是？',
      options: [
        { label: '挺好的，人生就应该这样', value: 1 },
        { label: '有点内疚但也还行', value: 2 },
        { label: '会焦虑，感觉浪费了时间', value: 3 },
      ],
    },
    {
      id: 'S3_q4', dim: 'S3',
      text: '看到同龄人创业成功/升职加薪的新闻，你更接近哪种反应？',
      options: [
        { label: '跟我有什么关系呢', value: 1 },
        { label: '有点触动但不至于行动', value: 2 },
        { label: '我也得加把劲了', value: 3 },
      ],
    },
  ],
  E1: [
    {
      id: 'E1_q1', dim: 'E1',
      text: '对象超过5小时没回消息，说自己窜稀了，你会怎么想？',
      options: [
        { label: '拉稀不可能5小时，也许ta隐瞒了我。', value: 1 },
        { label: '在信任和怀疑之间摇摆。', value: 2 },
        { label: '也许今天ta真的不太舒服。', value: 3 },
      ],
    },
    {
      id: 'E1_q2', dim: 'E1',
      text: '我在感情里经常担心被对方抛弃',
      options: [
        { label: '是的', value: 1 },
        { label: '偶尔', value: 2 },
        { label: '不是', value: 3 },
      ],
    },
    {
      id: 'E1_q3', dim: 'E1',
      text: '对象和异性朋友单独吃了顿饭，提前告诉了你，你的反应？',
      options: [
        { label: '心里很不舒服，会反复追问细节', value: 1 },
        { label: '有点在意但能忍住不问太多', value: 2 },
        { label: '没啥，吃个饭而已', value: 3 },
      ],
    },
    {
      id: 'E1_q4', dim: 'E1',
      text: '恋爱中对方突然说"我想一个人静一静"，你的第一反应是？',
      options: [
        { label: '完了，ta是不是要分手', value: 1 },
        { label: '有点紧张但先给ta空间', value: 2 },
        { label: '好的，正好我也能做点自己的事', value: 3 },
      ],
    },
    {
      id: 'E1_q5', dim: 'E1',
      text: '你翻到对象和前任的聊天记录（无暧昧内容），你会？',
      options: [
        { label: '内心翻江倒海，可能会质问', value: 1 },
        { label: '有点不爽但能理性看待', value: 2 },
        { label: '都是过去的事了，无所谓', value: 3 },
      ],
    },
  ],
  E2: [
    {
      id: 'E2_q1', dim: 'E2',
      text: '我对天发誓，我对待每一份感情都是认真的！',
      options: [
        { label: '并没有', value: 1 },
        { label: '也许？', value: 2 },
        { label: '是的！（问心无愧骄傲脸）', value: 3 },
      ],
    },
    {
      id: 'E2_q2', dim: 'E2',
      text: '你的恋爱对象是一个尊老爱幼，温柔敦厚，洁身自好，光明磊落，大义凛然，能言善辩，口才流利，观察入微，见多识广，博学多才，诲人不倦，和蔼可亲，平易近人，心地善良，慈眉善目，积极进取，意气风发，玉树临风，国色天香，倾国倾城，花容月貌的人，此时你会？',
      options: [
        { label: '就算ta再优秀我也不会陷入太深。', value: 1 },
        { label: '会介于A和C之间。', value: 2 },
        { label: '会非常珍惜ta，也许会变成恋爱脑。', value: 3 },
      ],
    },
    {
      id: 'E2_q3', dim: 'E2',
      text: '刚在一起三天，对方突然生病住院了，你会？',
      options: [
        { label: '发个消息问候一下就行了', value: 1 },
        { label: '会关心但不至于立刻冲去医院', value: 2 },
        { label: '买水果直奔医院，甚至想请假陪护', value: 3 },
      ],
    },
    {
      id: 'E2_q4', dim: 'E2',
      text: '分手后多久你能真正走出来？',
      options: [
        { label: '几天就差不多了，翻篇很快', value: 1 },
        { label: '需要一段时间，但不会太久', value: 2 },
        { label: '很久很久，甚至几年后偶尔还会想', value: 3 },
      ],
    },
  ],
  E3: [
    {
      id: 'E3_q1', dim: 'E3',
      text: '恋爱后，对象非常黏人，你作何感想？',
      options: [
        { label: '那很爽了', value: 1 },
        { label: '都行无所谓', value: 2 },
        { label: '我更喜欢保留独立空间', value: 3 },
      ],
    },
    {
      id: 'E3_q2', dim: 'E3',
      text: '我在任何关系里都很重视个人空间',
      options: [
        { label: '我更喜欢依赖与被依赖', value: 1 },
        { label: '看情况', value: 2 },
        { label: '是的！（斩钉截铁地说道）', value: 3 },
      ],
    },
    {
      id: 'E3_q3', dim: 'E3',
      text: '对象想要你手机密码、共享位置、共用社交账号，你的态度是？',
      options: [
        { label: '完全可以！这才是爱', value: 1 },
        { label: '密码可以给，但共享位置就算了吧', value: 2 },
        { label: '这是我的隐私底线，不行', value: 3 },
      ],
    },
    {
      id: 'E3_q4', dim: 'E3',
      text: '理想中的恋爱频率是？',
      options: [
        { label: '恨不得24小时黏在一起', value: 1 },
        { label: '每天聊聊天，周末见面就好', value: 2 },
        { label: '各过各的，有空再联系', value: 3 },
      ],
    },
  ],
  A1: [
    {
      id: 'A1_q1', dim: 'A1',
      text: '大多数人是善良的',
      options: [
        { label: '其实邪恶的人心比世界上的痔疮更多。', value: 1 },
        { label: '也许吧。', value: 2 },
        { label: '是的，我愿相信好人更多。', value: 3 },
      ],
    },
    {
      id: 'A1_q2', dim: 'A1',
      text: '你走在街上，一位萌萌的小女孩蹦蹦跳跳地朝你走来（正脸、侧脸看都萌，用vivo、苹果、华为、OPPO手机看都萌，实在是非常萌的那种），她递给你一根棒棒糖，此时你作何感想？',
      options: [
        { label: '呜呜她真好真可爱！居然给我棒棒糖！', value: 3 },
        { label: '一脸懵逼，作挠头状', value: 2 },
        { label: '这也许是一种新型诈骗？还是走开为好。', value: 1 },
      ],
    },
    {
      id: 'A1_q3', dim: 'A1',
      text: '路上有人摔倒了，你的第一反应是？',
      options: [
        { label: '别扶，可能是碰瓷的', value: 1 },
        { label: '先观察一下再说', value: 2 },
        { label: '先过去看看怎么回事', value: 3 },
      ],
    },
    {
      id: 'A1_q4', dim: 'A1',
      text: '你觉得"人不为己天诛地灭"这句话？',
      options: [
        { label: '是真理，人本质都是自私的', value: 1 },
        { label: '有道理但不完全对', value: 2 },
        { label: '太极端了，很多人是真心利他的', value: 3 },
      ],
    },
  ],
  A2: [
    {
      id: 'A2_q1', dim: 'A2',
      text: '快考试了，学校规定必须上晚自习，请假会扣分，但今晚你约了女/男神一起玩《绝地求生：刺激战场》（一款刺激的游戏），你怎么办？',
      options: [
        { label: '翘了！反正就一次！', value: 1 },
        { label: '干脆请个假吧。', value: 2 },
        { label: '都快考试了还去啥。', value: 3 },
      ],
    },
    {
      id: 'A2_q2', dim: 'A2',
      text: '我喜欢打破常规，不喜欢被束缚',
      options: [
        { label: '认同', value: 1 },
        { label: '保持中立', value: 2 },
        { label: '不认同', value: 3 },
      ],
    },
    {
      id: 'A2_q3', dim: 'A2',
      text: '上班路上发现堵车，导航提示可以走一条禁左转的小路，你会？',
      options: [
        { label: '左转就左转，没有摄像头怕啥', value: 1 },
        { label: '看一下有没有交警再决定', value: 2 },
        { label: '老老实实走大路，违规不好', value: 3 },
      ],
    },
    {
      id: 'A2_q4', dim: 'A2',
      text: '团队做项目，领导定了一个你觉得不合理的流程，你会？',
      options: [
        { label: '直接按自己的方式来，领导又不盯着', value: 1 },
        { label: '先试试领导的，不行再改', value: 2 },
        { label: '按流程来，领导肯定有他的道理', value: 3 },
      ],
    },
  ],
  A3: [
    {
      id: 'A3_q1', dim: 'A3',
      text: '我做事通常有目标。',
      options: [
        { label: '不认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '认同', value: 3 },
      ],
    },
    {
      id: 'A3_q2', dim: 'A3',
      text: '突然某一天，我意识到人生哪有什么他妈的狗屁意义，人不过是和动物一样被各种欲望支配着，纯纯是被激素控制的东西，饿了就吃，困了就睡，一发情就想交配，我们简直和猪狗一样没什么区别。',
      options: [
        { label: '是这样的。', value: 1 },
        { label: '也许是，也许不是。', value: 2 },
        { label: '这简直是胡扯', value: 3 },
      ],
    },
    {
      id: 'A3_q3', dim: 'A3',
      text: '如果现在给你一个亿但条件是此生不能再有任何目标和追求，你会？',
      options: [
        { label: '给我给我！没有目标本来就是我的日常', value: 1 },
        { label: '好纠结啊...', value: 2 },
        { label: '不要，没有目标的人生才是真正的穷', value: 3 },
      ],
    },
    {
      id: 'A3_q4', dim: 'A3',
      text: '你对"活着就是为了吃饭睡觉打豆豆"这句话的态度是？',
      options: [
        { label: '说得好！人生本来就是这样', value: 1 },
        { label: '有道理但总觉得少了点什么', value: 2 },
        { label: '不认同，人应该有更高的追求', value: 3 },
      ],
    },
  ],
  Ac1: [
    {
      id: 'Ac1_q1', dim: 'Ac1',
      text: '我做事主要为了取得成果和进步，而不是避免麻烦和风险。',
      options: [
        { label: '不认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '认同', value: 3 },
      ],
    },
    {
      id: 'Ac1_q2', dim: 'Ac1',
      text: '你因便秘坐在马桶上（已长达30分钟），拉不出很难受。此时你更像',
      options: [
        { label: '再坐三十分钟看看，说不定就有了。', value: 1 },
        { label: '用力拍打自己的屁股并说："死屁股，快拉啊！"', value: 2 },
        { label: '使用开塞露，快点拉出来才好。', value: 3 },
      ],
    },
    {
      id: 'Ac1_q3', dim: 'Ac1',
      text: '面对一个有风险但可能回报很高的机会，你更倾向于？',
      options: [
        { label: '算了吧，万一亏了呢', value: 1 },
        { label: '观望一下，看别人怎么做', value: 2 },
        { label: '搏一搏，单车变摩托', value: 3 },
      ],
    },
    {
      id: 'Ac1_q4', dim: 'Ac1',
      text: '你工作/学习的主要驱动力是什么？',
      options: [
        { label: '不干就没饭吃，怕出事', value: 1 },
        { label: '一半是压力一半是兴趣', value: 2 },
        { label: '想做出点东西来，想变强', value: 3 },
      ],
    },
  ],
  Ac2: [
    {
      id: 'Ac2_q1', dim: 'Ac2',
      text: '我做决定比较果断，不喜欢犹豫',
      options: [
        { label: '不认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '认同', value: 3 },
      ],
    },
    {
      id: 'Ac2_q2', dim: 'Ac2',
      text: '此题没有题目，请盲选',
      options: [
        { label: '反复思考后感觉应该选A？', value: 1 },
        { label: '啊，要不选B？', value: 2 },
        { label: '不会就选C？', value: 3 },
      ],
    },
    {
      id: 'Ac2_q3', dim: 'Ac2',
      text: '饭店菜单有200道菜，你通常多久能点完？',
      options: [
        { label: '翻来覆去看半天，还要问服务员推荐', value: 1 },
        { label: '大概扫一遍，五分钟搞定', value: 2 },
        { label: '看到想吃的直接点，一分钟结束', value: 3 },
      ],
    },
    {
      id: 'Ac2_q4', dim: 'Ac2',
      text: '网购看了一件衣服还不错，但不确定好不好看，你会？',
      options: [
        { label: '加购物车收藏，看评价，问朋友，纠结三天', value: 1 },
        { label: '看看评价觉得行就下单', value: 2 },
        { label: '喜欢就买了，不好看再退', value: 3 },
      ],
    },
  ],
  Ac3: [
    {
      id: 'Ac3_q1', dim: 'Ac3',
      text: '别人说你"执行力强"，你内心更接近哪句？',
      options: [
        { label: '我被逼到最后确实执行力超强。。。', value: 1 },
        { label: '啊，有时候吧。', value: 2 },
        { label: '是的，事情本来就该被推进', value: 3 },
      ],
    },
    {
      id: 'Ac3_q2', dim: 'Ac3',
      text: '我做事常常有计划，____',
      options: [
        { label: '然而计划不如变化快。', value: 1 },
        { label: '有时能完成，有时不能。', value: 2 },
        { label: '我讨厌被打破计划。', value: 3 },
      ],
    },
    {
      id: 'Ac3_q3', dim: 'Ac3',
      text: '老师/领导布置了一个下周交的任务，你通常会？',
      options: [
        { label: '前一天晚上通宵赶出来', value: 1 },
        { label: '中途做一部分，最后几天再收尾', value: 2 },
        { label: '当天就开始做，争取提前交', value: 3 },
      ],
    },
    {
      id: 'Ac3_q4', dim: 'Ac3',
      text: '你的待办清单通常是什么状态？',
      options: [
        { label: '什么待办清单？我靠记忆（和ddl提醒）', value: 1 },
        { label: '有清单，完成率大概一半', value: 2 },
        { label: '清单上的事不做完我睡不着', value: 3 },
      ],
    },
  ],
  So1: [
    {
      id: 'So1_q1', dim: 'So1',
      text: '你因玩《第五人格》（一款刺激的游戏）而结识许多网友，并被邀请线下见面，你的想法是？',
      options: [
        { label: '网上口嗨下就算了，真见面还是有点忐忑。', value: 1 },
        { label: '见网友也挺好，反正谁来聊我就聊两句。', value: 2 },
        { label: '我会打扮一番并热情聊天，万一呢，我是说万一呢？', value: 3 },
      ],
    },
    {
      id: 'So1_q2', dim: 'So1',
      text: '朋友带了ta的朋友一起来玩，你最可能的状态是',
      options: [
        { label: '对"朋友的朋友"天然有点距离感，怕影响二人关系', value: 1 },
        { label: '看对方，能玩就玩。', value: 2 },
        { label: '朋友的朋友应该也算我的朋友！要热情聊天', value: 3 },
      ],
    },
    {
      id: 'So1_q3', dim: 'So1',
      text: '公司团建，一群你不太熟的同事，你会？',
      options: [
        { label: '找个角落待着玩手机等结束', value: 1 },
        { label: '别人来聊就聊，不来也不主动', value: 2 },
        { label: '主动找话题，这是拓展人脉的好机会', value: 3 },
      ],
    },
    {
      id: 'So1_q4', dim: 'So1',
      text: '电梯里只有你和一个邻居，你会？',
      options: [
        { label: '低头看手机假装很忙', value: 1 },
        { label: '点个头微笑一下', value: 2 },
        { label: '主动打招呼闲聊几句', value: 3 },
      ],
    },
  ],
  So2: [
    {
      id: 'So2_q1', dim: 'So2',
      text: '我和人相处主打一个电子围栏，靠太近会自动报警。',
      options: [
        { label: '认同', value: 3 },
        { label: '中立', value: 2 },
        { label: '不认同', value: 1 },
      ],
    },
    {
      id: 'So2_q2', dim: 'So2',
      text: '我渴望和我信任的人关系密切，熟得像失散多年的亲戚。',
      options: [
        { label: '认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '不认同', value: 3 },
      ],
    },
    {
      id: 'So2_q3', dim: 'So2',
      text: '一个不太熟的人突然对你特别热情，你的第一反应是？',
      options: [
        { label: '好开心，多一个朋友多一条路', value: 1 },
        { label: '有点疑惑但先看看', value: 2 },
        { label: '拉开距离，这人什么意思', value: 3 },
      ],
    },
    {
      id: 'So2_q4', dim: 'So2',
      text: '好朋友未经允许翻了你手机，你的反应是？',
      options: [
        { label: '没啥，好朋友随便看', value: 1 },
        { label: '有点不爽但不好意思说', value: 2 },
        { label: '直接说"你在干嘛"，这是我的私人领地', value: 3 },
      ],
    },
  ],
  So3: [
    {
      id: 'So3_q1', dim: 'So3',
      text: '有时候你明明对一件事有不同的、负面的看法，但最后没说出来。多数情况下原因是：',
      options: [
        { label: '这种情况较少。', value: 1 },
        { label: '可能碍于情面或者关系。', value: 2 },
        { label: '不想让别人知道自己是个阴暗的人。', value: 3 },
      ],
    },
    {
      id: 'So3_q2', dim: 'So3',
      text: '我在不同人面前会表现出不一样的自己',
      options: [
        { label: '不认同', value: 1 },
        { label: '中立', value: 2 },
        { label: '认同', value: 3 },
      ],
    },
    {
      id: 'So3_q3', dim: 'So3',
      text: '你在老板面前和在好朋友面前，说话风格差别大吗？',
      options: [
        { label: '差别不大，我一直都这样', value: 1 },
        { label: '会有些调整但核心没变', value: 2 },
        { label: '完全是两个人，职业的我和真实的我', value: 3 },
      ],
    },
    {
      id: 'So3_q4', dim: 'So3',
      text: '朋友问你"你觉得我新发型好看吗？"（其实挺丑的），你会？',
      options: [
        { label: '直接说"兄弟说实话有点抽象"', value: 1 },
        { label: '委婉地说"挺特别的，要不要试试别的风格"', value: 2 },
        { label: '"好看好看！特别适合你！"', value: 3 },
      ],
    },
  ],
};

export const SPECIAL_QUESTIONS: SpecialQuestion[] = [
  {
    id: 'drink_gate_q1',
    kind: 'drink_gate',
    text: '您平时有什么爱好？',
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
    text: '您对饮酒的态度是？',
    options: [
      { label: '小酌怡情，喝不了太多。', value: 1 },
      { label: '我习惯将白酒灌在保温杯，当白开水喝，酒精令我信服。', value: 2 },
    ],
  },
];
