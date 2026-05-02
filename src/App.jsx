import { useState } from "react";

const PUZZLES = [
  {
    answer: "POTLUCK",
    clues: [
      "A sacred communal covenant wherein the Body of Christ, compelled by the pneumatic bonds of fellowship, converges upon the consecrated space of the fellowship hall, each bearing forth the labors of their domestic ministry as an offering unto the collective table of shared sustenance.",
      "As the early church broke bread from house to house with gladness and singleness of heart, so too does the modern congregation enact this ancient ritual of provision, wherein the spiritual gifts of casserole and Jell-O mold alike are offered up in thanksgiving.",
      "Every family signs up on the sheet in the church foyer — one dish to share, serves eight, please label if it contains nuts. The Hendersons always bring something store-bought and everyone notices.",
      "You bring a dish, everyone else brings a dish, and somehow there are seventeen pasta salads and zero forks.",
      "It's a church dinner where everyone brings food. You eat in the fellowship hall on folding tables.",
    ],
  },
  {
    answer: "PRAISE HANDS",
    clues: [
      "The pneumatic embodiment of charismatic capitulation, wherein the upper extremities are elevated in a posture of surrendered worship, signifying the transcendence of somatic self-consciousness in the Spirit-led act of corporate adoration.",
      "That which the Psalmist commanded when he wrote 'lift up your hands in the sanctuary,' made manifest in the contemporary worship gathering, particularly during the bridge of the third song when the Spirit really starts moving.",
      "What the passionate people in the front row do during worship while everyone else stares at their shoes or checks the song lyrics on the screen for the fourth time.",
      "You raise both hands up during the slow worship song. Eyes closed optional but strongly implied.",
      "Hands up in the air at church. Like at a concert, but holier.",
    ],
  },
  {
    answer: "FELT BOARD",
    clues: [
      "The pre-digital analog multimedia pedagogical apparatus, constructed of textile substrate and complementary adhesive figures, employed as the primary instrument of narrative theological instruction in the formative catechetical environment of Sunday School antiquity.",
      "Before PowerPoint graced the sanctuary screens, before VeggieTales occupied the nursery television, this humble instrument bore witness to the stories of Daniel, David, and the loaves and fishes in the hands of faithful children's ministers across the land.",
      "The Sunday School teacher peeled the little Jesus figure off and stuck him on the hill while thirty second-graders sat on the carpet pretending to pay attention.",
      "A fuzzy board where you stick fuzzy Bible characters to tell the story. Noah. Ark. Animals. You know the one.",
      "It's a board covered in felt. You stick felt pictures on it. It's how they taught Bible stories before screens.",
    ],
  },
  {
    answer: "TITHE",
    clues: [
      "The covenantal act of proportional financial consecration, rooted in the Abrahamic and Mosaic traditions, wherein the faithful adherent renders unto the ecclesial body precisely one-tenth of their gross material increase as an act of soteriological obedience and eschatological trust.",
      "Malachi 3:10 is printed in the bulletin every third Sunday. The capital campaign thermometer on the wall in the lobby has been at sixty-two percent for nine months.",
      "The pastor preaches on money more than you expected when you first started coming. There's a giving app now. They also take Venmo.",
      "Ten percent of your paycheck goes to the church. Before taxes if you're really serious about it.",
      "You give the church ten percent of what you earn. It's in the Bible. Probably.",
    ],
  },
  {
    answer: "VACATION BIBLE SCHOOL",
    clues: [
      "The annual summer pedagogical convocation wherein the youth of the congregation and surrounding unchurched community are gathered for an intensive week of kerygmatic instruction, administered through the tripartite media of craft, song, and themed narrative, culminating in a Friday evening presentation before the assembled congregation.",
      "For five days every June, the sanctuary is transformed by an elaborate purchased curriculum theme — jungle, outer space, ancient Egypt — and volunteers wear matching t-shirts and teach memory verses through choreographed hand motions.",
      "You went every summer as a kid. You made a cross out of popsicle sticks. You learned 'Joshua fought the battle of Jericho.' You got a juice box and animal crackers.",
      "It's Bible camp but during the day. At the church. In summer. There are skits and snacks and someone always cries.",
      "Kids go to church for a week in the summer to do crafts and learn about Jesus. There is always a theme.",
    ],
  },
  {
    answer: "ACCOUNTABILITY PARTNER",
    clues: [
      "A covenantal dyadic relationship of mutual spiritual surveillance, wherein two members of the Body voluntarily submit to reciprocal confession, admonition, and intercessory oversight, for the purposes of sanctification and the mortification of the flesh.",
      "The pastoral staff recommends every man in the congregation have one. There is a curriculum. It involves asking each other hard questions every week about purity, anger, and whether you've been in the Word.",
      "Your friend from small group who you're supposed to text when you're struggling. You mostly just text each other memes now and occasionally ask if you've been reading your Bible.",
      "Someone from church who checks in on you about your sin. You meet at Chick-fil-A on Thursdays.",
      "A church friend who makes sure you're not messing up. You confess stuff to each other. It can get awkward.",
    ],
  },
  {
    answer: "ALTAR CALL",
    clues: [
      "The climactic kerygmatic moment of the evangelical homiletical tradition, wherein the preacher, having concluded the proclamation of the Gospel, issues an invitation of pneumatic urgency, calling the unregenerate and the spiritually wayward alike to a public act of volitional response at the appointed place of consecration.",
      "Every head bowed, every eye closed. No one looking around. If you feel the Spirit moving in your heart today, if you've never made that decision, the pastor wants you to just slip your hand up. Just between you and God.",
      "The band plays 'Just As I Am' very slowly and repeatedly while people walk to the front. It can go on for a while. The associate pastor is already down there looking encouraging.",
      "At the end of the sermon you're invited to walk to the front of the church if you want to get saved or rededicate your life.",
      "The pastor asks people to come up front at the end of church if they want to accept Jesus. Someone always goes.",
    ],
  },
  {
    answer: "QUIET TIME",
    clues: [
      "The prescribed daily discipline of individual contemplative withdrawal, wherein the believer sequentially engages in lectio divina, petitionary and intercessory supplication, and meditative scriptural rumination, ideally in the auroral hours before the commencement of secular obligations.",
      "The spiritual discipline your youth pastor said you needed every morning before school. You tried for two weeks in January. Your journal has three entries and a doodle of a cross.",
      "You're supposed to wake up early, read your Bible, and pray. People who do it consistently seem very put-together. You are not those people.",
      "Personal Bible reading and prayer time. Every morning, ideally. Before your phone.",
      "You sit alone with your Bible and pray. In the morning. Before the day starts. That's it.",
    ],
  },
  {
    answer: "PURITY RING",
    clues: [
      "A talismanic artifact of covenantal chastity, worn upon the digital extremity as a public profession of pre-marital sexual abstinence, rooted in the True Love Waits movement and the broader evangelical theology of the body as temple of the Holy Spirit.",
      "You signed a card at a conference in seventh grade and your parents bought you one from a Christian bookstore. It sat next to your WWJD bracelet.",
      "A ring that means you've promised not to have sex until you're married. Big in the nineties and early two-thousands. Youth group staple.",
      "A ring you wear to show you're saving yourself. There was probably a ceremony involved. And a father.",
      "A ring that means you're waiting until marriage. You probably got it at a youth conference.",
    ],
  },
  {
    answer: "SPEAKING IN TONGUES",
    clues: [
      "The pneumatic charism of glossolalia, contested within the hermeneutical traditions of cessationism and continuationism, wherein the Spirit-filled believer vocalizes in an unlearned linguistic mode, understood variously as a heavenly language, an angelic utterance, or an intercessory groan too deep for conventional articulation.",
      "The Charismatic wing of the Church holds this gift as the initial physical evidence of Spirit baptism. The Baptists in the next county over have feelings about this. Strong feelings.",
      "It happened at Pentecost. It happens at some churches on Sunday mornings. It makes first-time visitors uncomfortable. The person next to you seems fine with it.",
      "Some people at church make sounds that aren't English during worship or prayer. It's a prayer language, they say.",
      "Praying in a language you don't know. Some churches do it. Some churches definitely do not.",
    ],
  },
  {
    answer: "MISSION TRIP",
    clues: [
      "A temporally bounded sojourn of cross-cultural evangelical witness and diaconal service, undertaken by members of the ecclesial community, wherein the participant engages in both proclamatory and incarnational ministry among unreached or underserved populations, returning transformed — at least for several weeks.",
      "The youth group does one every summer. There is a fundraiser. You sell cookie dough. You go somewhere and build something or run a VBS. You take a lot of photos.",
      "You went to Guatemala or Appalachia or inner-city Chicago. You painted a house. You played with kids. It changed your life. You talked about it for a semester.",
      "A church trip where you go somewhere to help people and share the Gospel. Usually a week long. You raise support.",
      "You go somewhere with your church group to do good things and tell people about Jesus. You come back with a lot of feelings.",
    ],
  },
  {
    answer: "LIFE GROUP",
    clues: [
      "The contemporary ecclesiological iteration of the Wesleyan class meeting and the early church's oikos structure, wherein a subset of the congregation covenants together for the purposes of mutual discipleship, communal Scripture engagement, intercessory prayer, and the cultivation of authentic koinonia beyond the Sunday gathering.",
      "The church growth model requires everyone to be in one. The pastor mentioned it again this week. You've been meaning to sign up for the fall session.",
      "Eight to twelve people meet in someone's living room on a Wednesday night. There's a discussion guide. Someone always brings chips. Prayer requests take forty minutes.",
      "A small group from your church that meets weekly at someone's house to do Bible study and pray together.",
      "A small church group that meets at someone's house. You talk about the sermon and pray for each other.",
    ],
  },
  {
    answer: "SWORD DRILL",
    clues: [
      "A pedagogical gamification of canonical biblical navigation, practiced within the formative catechetical contexts of children's ministry and youth fellowship, wherein participants engage in competitive temporal measurement of their capacity to locate prescribed pericopes within the physical codex of Holy Scripture.",
      "The children's pastor shouts a reference. Every child holds their Bible above their head, spine up, pages fanned. On go, they race. The kid who's been coming the longest always wins.",
      "A Bible game where someone calls out a verse and you race to find it first. You had to hold your Bible a certain way to start.",
      "A church game where you race to find a Bible verse. Whoever finds it first wins. Very competitive if you grew up in church.",
      "Kids race to find a Bible verse as fast as they can. First one to find it reads it out loud. It's a church game.",
    ],
  },
  {
    answer: "RAPTURE",
    clues: [
      "The eschatological event, disputed among premillennialist, amillennialist, and postmillennialist hermeneutical traditions, wherein the parousia of Christ precipitates the pneumatic translation of the living saints and the resurrection of the departed faithful, as articulated in the Thessalonian correspondence and filtered through the dispensationalist systematization of Darby and Scofield.",
      "Left Behind was a book series and then a movie with Kirk Cameron. Your church had a view on the timeline. It was very specific. There was a chart.",
      "Some Christians believe Jesus will suddenly take all believers up to heaven before things get really bad on earth. Pre-trib, mid-trib, post-trib — pick your side.",
      "When Jesus comes back and takes all the Christians up to heaven suddenly. Like, in a moment. Gone.",
      "Christians suddenly disappear up to heaven. It happens before the end times. Some churches talk about it a lot.",
    ],
  },
  {
    answer: "PRAYER JOURNAL",
    clues: [
      "A codex of personal intercessory and contemplative inscription, wherein the believer externalizes the dialogical dimensions of their devotional praxis through written supplication, gratitude, and spiritual discernment, functioning simultaneously as a record of providential faithfulness and an instrument of contemplative formation.",
      "The women's ministry retreat includes one as a gift. It has a verse on the cover. The pages are slightly textured. You filled in the first six pages with intention and sincerity.",
      "You write your prayers down instead of just saying them. It helps you focus. You're supposed to look back and see how God answered. The entries get shorter after March.",
      "A notebook where you write your prayers. You can see how things got answered when you look back.",
      "You write your prayers in a notebook. That's it. It's a journal. For prayer.",
    ],
  },
  {
    answer: "CHRISTIAN FISH STICKER",
    clues: [
      "An ichthyic vesicle emblem affixed to the posterior surface of personal automotive conveyances, serving as a public profession of Christological allegiance rooted in the acrostic significance of the Greek word ΙΧΘΥΣ, functioning as both an apotropaic symbol and a socio-religious identity marker within the vehicular public square.",
      "The early church used it as a secret symbol during persecution. Now it is on the back of a Suburban next to a 'Proud Cheer Mom' decal and a faded parking pass from a Christian university.",
      "Your parents had one on the minivan. There's also a version with legs and the word Darwin on it, which upsets people who have the regular one.",
      "The little fish symbol on the back of a car that means the driver is Christian. You see it in church parking lots.",
      "It's a fish shape on the back of a car. It means the driver is a Christian. You've seen it a thousand times.",
    ],
  },
  {
    answer: "ANOINTING OIL",
    clues: [
      "A consecrated oleaginous substance, typically derived from the olea europaea, employed within charismatic and sacramental ecclesial traditions as a material sign of pneumatic blessing, healing invocation, and divine commissioning, applied by the laying on of hands in accordance with the Jacobean epistolary prescription.",
      "James 5:14 says to call the elders. They come. They pray. Someone produces a small bottle, often purchased from a Christian bookstore or brought back from Israel.",
      "The pastor dips his thumb in it and makes a cross on your forehead when he prays for healing. It smells like olives. Some churches use it every week.",
      "Oil that elders use when they pray for someone who's sick. They put it on your forehead.",
      "Special oil the pastor puts on you when praying for healing. It comes in a little bottle.",
    ],
  },
  {
    answer: "DEVOTIONAL",
    clues: [
      "A paracanonical literary artifact of condensed spiritual edification, typically structured as a brief pericopic reading accompanied by homiletical reflection, practical application, and a closing intercessory prompt, consumed in the context of individual or familial morning or evening spiritual discipline.",
      "Sarah Young wrote one. So did Oswald Chambers. Max Lucado has several. Your grandmother gave you one for Christmas with a ribbon bookmark and your name embossed on the cover.",
      "A short daily reading to help you stay spiritually on track. There's a Bible verse, a paragraph or two, and a prayer. Takes about five minutes if you do it.",
      "A little book with daily Bible readings and short reflections. You read one entry each day.",
      "A short daily Bible reading book. One page a day. Usually a verse and some thoughts about it.",
    ],
  },
  {
    answer: "FELLOWSHIP HALL",
    clues: [
      "The auxiliary ecclesiastical space appended to or contiguous with the primary sanctuary edifice, consecrated not to formal liturgical function but to the diaconal and koinonial activities of the gathered community, including but not limited to potluck suppers, funeral receptions, Awana programming, and the annual church business meeting.",
      "Every church has one. The carpet is an unusual color that has not been updated since 1987. The tables fold. The chairs stack. There is a kitchen with a window that opens into the room.",
      "This is where you eat after the service. Where they held your aunt's funeral reception. Where VBS setup happens every June. Where the deacon board met to discuss the budget.",
      "The big room at church that isn't the sanctuary. You eat there. You have meetings there. There are round tables.",
      "The large room at church where everyone eats and has events. Not the main church room. The other one.",
    ],
  },
  {
    answer: "YOUTH GROUP",
    clues: [
      "The age-segregated para-liturgical community of adolescent believers, convened under the pastoral oversight of a youth minister, typically on Wednesday evenings, for the tripartite purposes of evangelical nurture, communal formation, and the prevention of spiritual attrition during the developmentally precarious years of secondary education.",
      "The youth pastor drives a used Jeep and knows how to play guitar badly enough to be relatable. There are games, a short message, and small groups. Someone cries occasionally. It is formative.",
      "Wednesday nights in the church basement or a separate building. Pizza. Dodgeball or some other loud game. A twenty-minute talk. Everyone sits on the floor.",
      "The teenagers at church who meet together. Usually on Wednesday nights. There's a youth pastor who tries very hard.",
      "The church group for teenagers. They meet separately from adults. There are games and a message.",
    ],
  },
  {
    answer: "CHURCH CAMP",
    clues: [
      "An annual residential extra-ecclesial retreat of concentrated spiritual formation, wherein the youth of the congregation are transported to a bucolic or sylvan setting for a period of intensive communal worship, homiletical saturation, and recreational activity, culminating in a Thursday evening bonfire service of profound emotional and volitional significance.",
      "You went the summer before eighth grade and came back a different person — for approximately three weeks. The counselors were college students. You stayed in a cabin. Someone got the Holy Spirit by the lake.",
      "A week away with your church group. Cabins. Cafeteria food. Worship every night in a big room. Someone always rededicated their life. You got a t-shirt.",
      "A week at camp with your church friends. Bible stuff during the day, bonfire at night. Very emotional Thursday service.",
      "Church kids go away to camp for a week. They do Bible stuff, swim, and have a big emotional worship night.",
    ],
  },
  {
    answer: "STUDY BIBLE",
    clues: [
      "An annotated canonical edition incorporating comprehensive paratextual apparatus including marginal cross-references, pericopic introductions, lexical concordance, hermeneutical commentary, thematic index, and cartographic supplements, designed to facilitate the individual believer's rigorous engagement with the biblical text in the absence of formal theological training.",
      "There is a leather-bound one with your name on the cover somewhere in your parents' house. It was a confirmation gift or a graduation gift. The notes in the margins are the publisher's, not yours.",
      "NIV, ESV, or KJV depending on your tribe. Thin pages that feel like they might tear. Small text. Notes at the bottom explaining what the passage means.",
      "A Bible with a lot of extra notes and explanations printed in it to help you understand what you're reading.",
      "It's a Bible with extra notes inside. The notes help explain what things mean. It's bigger and heavier than a regular Bible.",
    ],
  },
  {
    answer: "LOVE OFFERING",
    clues: [
      "A supplementary volitional financial contribution, solicited from the congregation in recognition of the ministerial labor of an itinerant speaker, visiting missionary, or special musical guest, distinct from the regular tithe and collected with an air of Spirit-led spontaneity, typically in a second passing of the plate.",
      "The visiting evangelist has come all this way. He's staying in the Hendersons' guest room. The pastor asks the congregation to bless him before he goes. The plate comes around a second time.",
      "After the guest preacher speaks, the pastor says the church wants to bless them. Extra money collected specifically for that person. On top of the regular offering.",
      "Money collected at church specifically to give to a guest speaker or visiting missionary as a thank-you.",
      "It's extra money the church collects to give directly to a special guest or speaker. A gift from the congregation.",
    ],
  },
  {
    answer: "HEDGE OF PROTECTION",
    clues: [
      "A metaphorical intercessory construct of uncertain biblical provenance, frequently invoked in extemporaneous petitionary prayer, wherein the supplicant appeals to divine agency for the establishment of an invisible spiritual perimeter around the person, family unit, or endeavor being commended to providential care.",
      "No one is entirely sure where this phrase comes from scripturally, but everyone's heard it. It shows up in every prayer chain email and every pre-road-trip parking lot prayer circle.",
      "When someone prays for traveling mercies, they also ask for this. It's invisible. It keeps bad things out. God builds it.",
      "Something people pray for when they want God to protect someone. A spiritual barrier. You've heard it in every prayer ever.",
      "A thing people ask God to put around someone to keep them safe. It's a prayer phrase. There is no actual hedge.",
    ],
  },
  {
    answer: "TRAVELING MERCIES",
    clues: [
      "A valedictory intercessory invocation of divine providential oversight, beseeched upon the departing sojourner by the assembled fellowship, petitioning the Almighty for safe passage, meteorological benevolence, and the protection of both vehicular conveyance and immortal soul throughout the duration of the journey.",
      "Every road trip, every mission trip departure, every Sunday airport run — someone says this. It is unclear what mercies are being traveled, or whether stationary mercies are also available.",
      "What your small group prays over you before you drive to see your parents for Thanksgiving. Also requested before any flight to a country with a travel advisory.",
      "A prayer blessing for someone going on a trip. God watches over their drive or flight. Very churchy send-off.",
      "What people say at church when someone is about to travel. It means 'be safe.' But churchier.",
    ],
  },
  {
    answer: "WOMEN'S MINISTRY",
    clues: [
      "The gender-segregated para-ecclesiastical formation structure oriented toward the spiritual edification, relational discipleship, and domestic theological formation of the female constituency of the congregation, typically expressed through Bible study cohorts, seasonal retreats, and the consumption of devotional literature featuring floral cover imagery.",
      "There is a Beth Moore study happening on Tuesday mornings. Attendance is strong among the thirty-five to fifty-five demographic. There is coffee. There are tears. There is a workbook.",
      "The women of the church do their own Bible study separate from the men. They go on a fall retreat. Someone always shares something really personal and it bonds everyone.",
      "A church group specifically for women. They do Bible studies, go on retreats, and support each other.",
      "It's the women's group at church. They meet separately. There's usually a study guide and someone cries.",
    ],
  },
  {
    answer: "WALKING IN VICTORY",
    clues: [
      "A pneumatological and soteriological disposition of triumphalist sanctification, wherein the redeemed believer is exhorted to embody the eschatological reality of their positional righteousness in Christ through volitional alignment with the Spirit's empowerment, manifesting in observable behavioral and attitudinal transformation.",
      "The sermon series is called this. The T-shirt from the men's retreat says this. The bookmark from the women's conference says this. It is unclear what the alternative gait would be called.",
      "A phrase that means you're living like a Christian is supposed to live. Head up, sin down, Bible open. The pastor says you should be doing it.",
      "A church phrase that means you're doing well spiritually. You're not sinning much. You're reading your Bible. Things are good.",
      "It means you're living right as a Christian. Like spiritually winning. You've heard it in every sermon series.",
    ],
  },
  {
    answer: "WORSHIP LEADER",
    clues: [
      "The liturgical music director of the contemporary evangelical gathering, a charismatic figure whose vocation encompasses the curation of the sonic and spiritual atmosphere of corporate adoration, responsible for the seamless integration of CCLI-licensed repertoire, spontaneous Spirit-led transition, and congregational engagement.",
      "They have a beard or a flowy dress. They learned most of their songs from Hillsong or Bethel. They say 'one more time' and mean it. They trained at a Bible college in the arts worship track.",
      "The person up front with the guitar who leads the singing part of church before the sermon. They pick the songs. They really mean it.",
      "The person on stage with a guitar or microphone who leads everyone in singing at church.",
      "The person at church who leads the music. They sing. You follow along. They close their eyes a lot.",
    ],
  },
  {
    answer: "WWJD BRACELET",
    clues: [
      "A talismanic wristband bearing an acrostic interrogative of Christological ethical discernment, mass-produced in woven nylon and distributed throughout the evangelical youth subculture of the late twentieth century as a portable reminder of incarnational moral exemplarism.",
      "Charles Sheldon asked the question in 1896. A youth group in Holland, Michigan turned it into a bracelet in 1989. By 1997 it was in every Christian bookstore, youth group, and the wrists of approximately every American teenager who had ever attended a church.",
      "You had one. It was probably a color. You wore it until it got gross and frayed and fell off in the shower. You still remember which wrist.",
      "A bracelet with four letters on it that asks a question about Jesus. Very nineties. Very youth group.",
      "It says What Would Jesus Do on your wrist. You wore it as a kid. Everyone did.",
    ],
  },
  {
    answer: "FIRE TUNNEL",
    clues: [
      "A charismatic pneumatological practice of concentrated intercessory impartation, wherein two parallel lines of Spirit-filled believers form a corridor of prayer and prophetic blessing through which supplicants pass sequentially, receiving the laying on of hands and Spirit-anointed utterance from each station of the gauntlet.",
      "Common at youth camps, revival services, and any gathering where the worship set has gone on for longer than forty minutes. Someone usually falls down. This is considered a good sign.",
      "Two lines of people face each other and you walk through the middle while everyone prays over you and touches your shoulders. It can get intense. Some people start crying immediately upon entering.",
      "A thing at charismatic church events where you walk between two rows of people who pray over you as you pass through.",
      "Two lines of people at church who pray over you as you walk between them. Very intense. Very charismatic.",
    ],
  },
];

const SCORES = [
  { title: "Anointed", emoji: "🙌", color: "#c8a84b" },
  { title: "Blessed and Highly Favored", emoji: "😇", color: "#8fbc5a" },
  { title: "Convicted", emoji: "🙏", color: "#e0a84b" },
  { title: "Spiritually Dry Season", emoji: "😬", color: "#c47a3a" },
  { title: "Needs More Jesus", emoji: "🤦", color: "#b85c38" },
  { title: "Backslider", emoji: "💀", color: "#8b3a2a" },
];

const getDayPuzzle = () => {
  const start = new Date("2025-01-01");
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return PUZZLES[diff % PUZZLES.length];
};

export default function App() {
  const [screen, setScreen] = useState("intro");
  const [revealedCount, setRevealedCount] = useState(1);
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [scoreIndex, setScoreIndex] = useState(0);
  const [guessedOnClue, setGuessedOnClue] = useState(null);
  const [copied, setCopied] = useState(false);

  const puzzle = getDayPuzzle();

  const handleSubmit = () => {
    if (!guess.trim()) return;
    const correct = guess.trim().toUpperCase() === puzzle.answer.toUpperCase();
    setIsCorrect(correct);
    setGuessedOnClue(revealedCount);
    setScoreIndex(correct ? revealedCount - 1 : 5);
    setScreen("result");
  };

  const score = SCORES[scoreIndex];

  const shareText = () =>
    `✝️ The WORDle — Today's Daily Devotional\n\n${score.emoji} ${score.title}\n\n${
      isCorrect ? `I got it on clue ${guessedOnClue} of 5!` : "I was humbled by the Word."
    }\n\nCan you do better, sinner? The Lord is calling you to repent and try:\nhttps://j-r-j-r.github.io/thewoooooordle/`;

  const handleTextShare = () => {
    window.open(`sms:?&body=${encodeURIComponent(shareText())}`, "_blank");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={s.root}>
      <style>{css}</style>

      {screen === "intro" && (
        <div style={s.card}>
          <div style={s.bibleWrap}>
            <svg viewBox="0 0 120 140" width="100" height="116" style={{ filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.5))" }}>
              <rect x="5" y="5" width="110" height="130" rx="6" fill="#5a2008" />
              <rect x="8" y="8" width="104" height="124" rx="4" fill="#7d3512" />
              <rect x="8" y="8" width="14" height="124" rx="3" fill="#4a1a06" />
              <rect x="20" y="20" width="80" height="100" rx="2" fill="none" stroke="#c8a84b" strokeWidth="1.5" />
              <rect x="53" y="38" width="14" height="48" rx="3" fill="#c8a84b" />
              <rect x="38" y="53" width="44" height="14" rx="3" fill="#c8a84b" />
              <polygon points="100,8 110,8 110,48 105,42 100,48" fill="#8b1a1a" />
            </svg>
          </div>
          <h1 style={s.title}>The WORDle</h1>
          <p style={s.subtitle}>A 30-Day Devotional Game for the Discerning Mind</p>
          <div style={s.verse}>
            <p style={s.verseText}>
              "Seek ye first the obvious answer, and all clues shall be revealed unto thee —
              one at a time, lest thy pride leadeth thee into wrongness.
              Thou hast but one guess. Use it wisely, beloved."
            </p>
            <p style={s.verseRef}>— Duhdle 1:1–4 (Revised Embarrassment Version)</p>
          </div>
          <div style={s.rules}>
            {[
              "📖  Five clues are revealed one at a time",
              "✍️  You get ONE guess — choose your moment wisely",
              "🙌  Guess early for glory. Guess late for safety.",
              "😬  Clue 5 reveals a faith too weak for the kingdom of heaven",
            ].map((r, i) => <p key={i} style={s.rule}>{r}</p>)}
          </div>
          <button style={s.btn} onClick={() => setScreen("game")}>Begin Today's Devotional</button>
        </div>
      )}

      {screen === "game" && (
        <div style={s.card}>
          <h1 style={s.titleSm}>The WORDle</h1>
          <p style={s.subtitleSm}>Today's Devotional</p>
          <div style={s.clues}>
            {Array.from({ length: revealedCount }).map((_, i) => (
              <div key={i} style={s.clueCard} className="reveal">
                <span style={s.clueNum}>Clue {i + 1} of 5</span>
                <p style={s.clueText}>"{puzzle.clues[i]}"</p>
              </div>
            ))}
          </div>
          <div style={s.dots}>
            {[1,2,3,4,5].map(n => (
              <div key={n} style={{ ...s.dot, background: n <= revealedCount ? "#c8a84b" : "rgba(200,168,75,0.2)" }} />
            ))}
          </div>
          <input
            style={s.input}
            value={guess}
            onChange={e => setGuess(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
            placeholder="Your answer..."
            autoCapitalize="characters"
          />
          <div style={s.btnRow}>
            <button style={{ ...s.btn, opacity: guess.trim() ? 1 : 0.5 }} onClick={handleSubmit} disabled={!guess.trim()}>
              Submit My Answer
            </button>
            {revealedCount < 5 && (
              <button style={s.ghost} onClick={() => setRevealedCount(r => r + 1)}>
                Reveal Clue {revealedCount + 1} →
              </button>
            )}
          </div>
          {revealedCount === 5 && <p style={s.warn}>⚠️ This is as obvious as it gets, beloved.</p>}
        </div>
      )}

      {screen === "result" && (
        <div style={s.card}>
          <h1 style={s.titleSm}>The WORDle</h1>
          <div style={{ ...s.badge, borderColor: score.color }}>
            <span style={s.emoji}>{score.emoji}</span>
            <p style={{ ...s.badgeTitle, color: score.color }}>{score.title}</p>
            {isCorrect
              ? <p style={s.badgeSub}>You got it on clue {guessedOnClue} of 5</p>
              : <p style={s.badgeSub}>The answer was: <strong style={{ color: "#c8a84b" }}>{puzzle.answer}</strong></p>
            }
          </div>
          <div style={s.answerBox}>
            <p style={s.answerLabel}>Today's Answer</p>
            <p style={s.answerWord}>{puzzle.answer}</p>
          </div>
          <div style={s.shareBox}>
            <p style={s.shareTitle}>Share your shame (or glory)</p>
            <div style={s.sharePreview}>
              <p style={s.sharePreviewText}>{shareText()}</p>
            </div>
            <div style={s.btnRow}>
              <button style={s.btn} onClick={handleTextShare}>📱 Text My Friends</button>
              <button style={s.ghost} onClick={handleCopy}>{copied ? "✓ Copied!" : "📋 Copy to Clipboard"}</button>
            </div>
          </div>
          <p style={{ ...s.allTitle, marginTop: "24px" }}>📖 All Five Clues Revealed</p>
          <div style={s.allClues}>
            {puzzle.clues.map((clue, i) => (
              <div key={i} style={{
                ...s.resultClue,
                borderLeftColor: i === guessedOnClue - 1 && isCorrect ? "#c8a84b" : "rgba(200,168,75,0.25)",
                background: i === guessedOnClue - 1 && isCorrect ? "rgba(200,168,75,0.07)" : "transparent",
              }}>
                <span style={s.clueNum}>Clue {i + 1}{i === guessedOnClue - 1 && isCorrect ? " ✓" : ""}</span>
                <p style={s.clueText}>"{clue}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
  .reveal { animation: fadeUp 0.35s ease forwards; }
  input:focus { outline: none; border-color: rgba(200,168,75,0.6) !important; }
  button { transition: filter 0.15s; }
  button:hover { filter: brightness(1.1); }
`;

const s = {
  root: { minHeight: "100vh", background: "linear-gradient(160deg,#1a0e06 0%,#2d1810 50%,#1a0e06 100%)", display: "flex", justifyContent: "center", padding: "24px 16px 48px", fontFamily: "'EB Garamond', Georgia, serif" },
  card: { width: "100%", maxWidth: "560px", background: "linear-gradient(180deg,#2a1508 0%,#1e0f06 100%)", border: "1px solid rgba(200,168,75,0.22)", borderRadius: "4px", padding: "32px 28px", boxShadow: "0 0 0 1px rgba(200,168,75,0.08), 0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(200,168,75,0.12)", alignSelf: "flex-start" },
  bibleWrap: { display: "flex", justifyContent: "center", marginBottom: "20px" },
  title: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(38px,8vw,52px)", fontWeight: 900, color: "#c8a84b", textAlign: "center", letterSpacing: "10px", lineHeight: 1, marginBottom: "6px", textShadow: "0 2px 20px rgba(200,168,75,0.35)" },
  titleSm: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: "30px", fontWeight: 900, color: "#c8a84b", textAlign: "center", letterSpacing: "8px", lineHeight: 1, marginBottom: "4px", textShadow: "0 2px 12px rgba(200,168,75,0.3)" },
  subtitle: { fontStyle: "italic", fontSize: "15px", color: "rgba(200,168,75,0.6)", textAlign: "center", marginBottom: "28px" },
  subtitleSm: { fontStyle: "italic", fontSize: "13px", color: "rgba(200,168,75,0.5)", textAlign: "center", marginBottom: "22px" },
  verse: { border: "1px solid rgba(200,168,75,0.18)", borderLeft: "3px solid rgba(200,168,75,0.45)", padding: "16px 18px", marginBottom: "22px", background: "rgba(200,168,75,0.04)" },
  verseText: { fontStyle: "italic", fontSize: "15px", color: "rgba(255,240,200,0.82)", lineHeight: 1.72, marginBottom: "8px" },
  verseRef: { fontSize: "12px", color: "rgba(200,168,75,0.55)", textAlign: "right" },
  rules: { marginBottom: "26px", display: "flex", flexDirection: "column", gap: "10px" },
  rule: { fontSize: "15px", color: "rgba(255,240,200,0.72)", lineHeight: 1.5 },
  btn: { width: "100%", padding: "14px", cursor: "pointer", background: "linear-gradient(135deg,#c8a84b,#a8843b)", border: "none", borderRadius: "2px", fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontSize: "15px", letterSpacing: "0.8px", color: "#1a0e06", boxShadow: "0 4px 16px rgba(200,168,75,0.25)" },
  ghost: { width: "100%", padding: "13px", cursor: "pointer", background: "transparent", border: "1px solid rgba(200,168,75,0.32)", borderRadius: "2px", fontFamily: "'EB Garamond',Georgia,serif", fontStyle: "italic", fontSize: "15px", color: "rgba(200,168,75,0.75)" },
  clues: { display: "flex", flexDirection: "column", gap: "12px", marginBottom: "18px" },
  clueCard: { border: "1px solid rgba(200,168,75,0.18)", borderLeft: "3px solid rgba(200,168,75,0.45)", padding: "14px 16px", background: "rgba(200,168,75,0.04)", opacity: 0 },
  clueNum: { display: "block", fontSize: "11px", letterSpacing: "2px", color: "rgba(200,168,75,0.48)", textTransform: "uppercase", marginBottom: "6px" },
  clueText: { fontStyle: "italic", fontSize: "15px", color: "rgba(255,240,200,0.88)", lineHeight: 1.65 },
  dots: { display: "flex", justifyContent: "center", gap: "8px", marginBottom: "18px" },
  dot: { width: "8px", height: "8px", borderRadius: "50%", transition: "background 0.3s" },
  input: { width: "100%", padding: "14px", marginBottom: "14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,168,75,0.28)", borderRadius: "2px", fontFamily: "'Playfair Display',Georgia,serif", fontSize: "18px", fontWeight: 700, color: "#c8a84b", letterSpacing: "2px", textAlign: "center", transition: "border-color 0.2s" },
  btnRow: { display: "flex", flexDirection: "column", gap: "10px" },
  warn: { fontStyle: "italic", fontSize: "13px", color: "#b85c38", textAlign: "center", marginTop: "12px" },
  badge: { border: "2px solid", padding: "24px", textAlign: "center", marginBottom: "18px", background: "rgba(0,0,0,0.18)" },
  emoji: { fontSize: "48px", display: "block", marginBottom: "10px" },
  badgeTitle: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: "22px", fontWeight: 700, marginBottom: "6px" },
  badgeSub: { fontStyle: "italic", fontSize: "15px", color: "rgba(255,240,200,0.6)" },
  answerBox: { textAlign: "center", marginBottom: "22px" },
  answerLabel: { fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(200,168,75,0.48)", marginBottom: "6px" },
  answerWord: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: "28px", fontWeight: 900, color: "#c8a84b", letterSpacing: "4px", textShadow: "0 2px 12px rgba(200,168,75,0.28)" },
  allTitle: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: "15px", fontWeight: 700, color: "rgba(200,168,75,0.75)", marginBottom: "12px" },
  allClues: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" },
  resultClue: { borderLeft: "3px solid", padding: "12px 14px" },
  shareBox: { borderTop: "1px solid rgba(200,168,75,0.14)", paddingTop: "20px", marginBottom: "8px" },
  shareTitle: { fontFamily: "'Playfair Display',Georgia,serif", fontStyle: "italic", fontSize: "15px", color: "rgba(200,168,75,0.65)", textAlign: "center", marginBottom: "12px" },
  sharePreview: { background: "rgba(200,168,75,0.05)", border: "1px solid rgba(200,168,75,0.14)", padding: "14px 16px", marginBottom: "14px", borderRadius: "2px" },
  sharePreviewText: { fontSize: "14px", color: "rgba(255,240,200,0.65)", lineHeight: 1.65, whiteSpace: "pre-line" },
};
