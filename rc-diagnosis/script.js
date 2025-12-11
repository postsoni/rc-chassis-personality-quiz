// ========================================
// 1. 質問データ（10問）
// ========================================
const questions = [
    {
        question: "週末の理想的な過ごし方は？",
        choices: [
            { text: "A: 家でゆっくり趣味に没頭", points: { miniZ: 2, tt02: 1 } },
            { text: "B: 外でアクティブに遊ぶ", points: { mp11: 2, cc02: 1 } },
            { text: "C: 友達とワイワイ飲み会", points: { rd20: 2, ta08: 1 } },
            { text: "D: 一人で黙々と作業", points: { trf421: 2, m08: 1 } }
        ]
    },
    {
        question: "新しいことを始めるとき、あなたは？",
        choices: [
            { text: "A: まず基本をしっかり学ぶ", points: { tt02: 2, ta08: 1 } },
            { text: "B: 見た目やデザインから入る", points: { rd20: 2, m08: 1 } },
            { text: "C: 感覚で試しながら覚える", points: { mp11: 2, cc02: 1 } },
            { text: "D: 完璧を目指して研究する", points: { trf421: 2, miniZ: 1 } }
        ]
    },
    {
        question: "困難に直面したとき、あなたは？",
        choices: [
            { text: "A: 冷静に分析して対処", points: { ta08: 2, tt02: 1 } },
            { text: "B: 力技で突破！", points: { cc02: 2, mp11: 1 } },
            { text: "C: 周りに相談する", points: { tt02: 2, ta08: 1 } },
            { text: "D: 絶対に諦めない", points: { trf421: 2, rd20: 1 } }
        ]
    },
    {
        question: "あなたの理想の休日は？",
        choices: [
            { text: "A: カフェで読書や創作活動", points: { miniZ: 2, m08: 1 } },
            { text: "B: 山や川でアウトドア", points: { cc02: 2, mp11: 1 } },
            { text: "C: 繁華街でショッピング", points: { rd20: 2, ta08: 1 } },
            { text: "D: ガレージで整備・改造", points: { trf421: 2, tt02: 1 } }
        ]
    },
    {
        question: "友達から見たあなたは？",
        choices: [
            { text: "A: 真面目で信頼できる", points: { tt02: 2, ta08: 1 } },
            { text: "B: ノリが良くて楽しい", points: { mp11: 2, rd20: 1 } },
            { text: "C: 繊細で優しい", points: { miniZ: 2, tt02: 1 } },
            { text: "D: 個性的でユニーク", points: { m08: 2, trf421: 1 } }
        ]
    },
    {
        question: "好きな色は？",
        choices: [
            { text: "A: 青・白（清潔感）", points: { tt02: 2, ta08: 1 } },
            { text: "B: 赤・黒（カッコいい）", points: { rd20: 2, trf421: 1 } },
            { text: "C: パステルカラー（柔らかい）", points: { miniZ: 2, m08: 1 } },
            { text: "D: アーミーグリーン（無骨）", points: { cc02: 2, mp11: 1 } }
        ]
    },
    {
        question: "仕事や勉強のスタイルは？",
        choices: [
            { text: "A: 計画的にコツコツ", points: { tt02: 2, ta08: 1 } },
            { text: "B: 直感で動く", points: { mp11: 2, rd20: 1 } },
            { text: "C: 完璧主義", points: { trf421: 2, miniZ: 1 } },
            { text: "D: マイペース", points: { cc02: 2, m08: 1 } }
        ]
    },
    {
        question: "ストレス解消法は？",
        choices: [
            { text: "A: 運動で発散", points: { mp11: 2, cc02: 1 } },
            { text: "B: お酒を飲む", points: { rd20: 2, ta08: 1 } },
            { text: "C: 一人で静かに過ごす", points: { miniZ: 2, trf421: 1 } },
            { text: "D: 趣味に没頭", points: { tt02: 2, m08: 1 } }
        ]
    },
    {
        question: "あなたの人間関係は？",
        choices: [
            { text: "A: 広く浅く", points: { ta08: 2, rd20: 1 } },
            { text: "B: 狭く深く", points: { miniZ: 2, trf421: 1 } },
            { text: "C: 誰とでも仲良く", points: { tt02: 2, mp11: 1 } },
            { text: "D: 一匹狼", points: { m08: 2, cc02: 1 } }
        ]
    },
    {
        question: "最後の質問！あなたのモットーは？",
        choices: [
            { text: "A: 堅実に、着実に", points: { tt02: 2, ta08: 1 } },
            { text: "B: 人生楽しんだもん勝ち！", points: { mp11: 2, rd20: 1 } },
            { text: "C: 美は細部に宿る", points: { miniZ: 2, m08: 1 } },
            { text: "D: 妥協しない", points: { trf421: 2, cc02: 1 } }
        ]
    }
];

// ========================================
// 2. 診断結果データ（8タイプ）
// ========================================
const results = {
    tt02: {
        name: "TT-02",
        title: "あなたは「TT-02」タイプ！",
        image: "TT-02.jpg",
        description: "真面目で堅実、誰からも信頼される優等生タイプ。バランス感覚に優れ、どんな状況でも安定したパフォーマンスを発揮します。初心者にも優しく、成長の余地も十分！",
        trivia: {
            tool: "プラスマイナスドライバー",
            hobby: "マニュアルを熟読",
            luckyPart: "ボールベアリング"
        },
        features: [
            "バランスが良く扱いやすい",
            "カスタマイズの幅が広い",
            "コストパフォーマンス抜群",
            "初心者から上級者まで対応"
        ]
    },
    rd20: {
        name: "ルーキードリフトRD2.0",
        title: "あなたは「ルーキードリフトRD2.0」タイプ！",
        image: "ルーキードリフト_RD2_0.jpg",
        description: "少しやんちゃで、見た目にこだわる自由人。お酒を片手にワイワイ楽しむのが好きで、ドリフトのように華麗に人生を楽しむタイプです！",
        trivia: {
            tool: "キャンバーゲージ",
            hobby: "SNSにラジコン画像を投稿",
            luckyPart: "ダンパーオイル"
        },
        features: [
            "ドリフト走行が楽しめる",
            "カスタマイズで個性を表現",
            "見た目のカッコよさ重視",
            "初心者でもドリフト入門に最適"
        ]
    },
    miniZ: {
        name: "Mini-Zシリーズ",
        title: "あなたは「Mini-Zシリーズ」タイプ！",
        image: "MINI-Zシリーズ.jpg",
        description: "可愛いものが好きで、繊細な心の持ち主。小さな幸せを大切にする職人気質で、細部へのこだわりが強い内向的な魅力の持ち主です。",
        trivia: {
            tool: "六角ソケットレンチ",
            hobby: "模型屋巡り",
            luckyPart: "タイヤ"
        },
        features: [
            "コンパクトで場所を取らない",
            "室内で手軽に楽しめる",
            "精密な操作が可能",
            "コレクション性が高い"
        ]
    },
    ta08: {
        name: "TA08 PRO",
        title: "あなたは「TA08 PRO」タイプ！",
        image: "TA08_PRO.jpg",
        description: "会社で言う課長・部長クラス。コミュニケーション能力が高く、世渡り上手。バランスを保ちながら、確実に結果を出すリーダータイプです！",
        trivia: {
            tool: "ボディリーマー",
            hobby: "友達と違うラジコンジャンルを語る",
            luckyPart: "チタンビス"
        },
        features: [
            "ツーリングカーレースに最適",
            "高速走行性能",
            "セッティングの自由度が高い",
            "競技向けの本格派"
        ]
    },
    trf421: {
        name: "TRF421",
        title: "あなたは「TRF421」タイプ！",
        image: "TRF421.jpg",
        description: "妥協を許さないこだわり派。S気質で、過程も結果も両方を重視する完璧主義者。最高のパフォーマンスを追求し続ける求道者です！",
        trivia: {
            tool: "ターンバックルレンチ",
            hobby: "ガレージにコーヒー持って引きこもる",
            luckyPart: "プログラミングボックス"
        },
        features: [
            "最高峰の競技用シャーシ",
            "カスタマイズ性が極めて高い",
            "上級者向けの本格仕様",
            "レースで勝つための設計"
        ]
    },
    cc02: {
        name: "CC-02",
        title: "あなたは「CC-02」タイプ！",
        image: "CC-02.jpg",
        description: "のんびりしているけど、実はとてもたくましい。筋肉質でいかついけど、内面は優しくて可愛い。ギャップが魅力のクローラータイプ！",
        trivia: {
            tool: "ブロワー",
            hobby: "アウトドアキャンプや河川敷にいく",
            luckyPart: "ホイール"
        },
        features: [
            "悪路走破性が高い",
            "ゆっくり楽しむクローリング",
            "リアルなスケール感",
            "アウトドア派におすすめ"
        ]
    },
    mp11: {
        name: "インファーノ MP11",
        title: "あなたは「インファーノ MP11」タイプ！",
        image: "インファーノMP11.jpg",
        description: "はっちゃけた外向的な性格で、小学生の心を忘れない純粋さを持つ。エンジン音を響かせて、思いっきり楽しむタイプです！",
        trivia: {
            tool: "エンジンスターター",
            hobby: "友達とはっちゃける",
            luckyPart: "プラグ"
        },
        features: [
            "エンジンカーの迫力",
            "バギーならではの走破性",
            "オフロードレースに最適",
            "メンテナンスも楽しめる"
        ]
    },
    m08: {
        name: "M-08 CONCEPT",
        title: "あなたは「M-08 CONCEPT」タイプ！",
        image: "M-08_CONCEPT.jpg",
        description: "強烈な個性派で、実は芸術が好きな感性豊かな人。他人と違う道を行くことに喜びを感じる、唯一無二の存在です！",
        trivia: {
            tool: "ドリルビット",
            hobby: "自分のラジコンカーを見てニヤニヤ",
            luckyPart: "サーボセイバー"
        },
        features: [
            "独特のデザイン",
            "Mシャーシならではの走り",
            "個性を表現できる",
            "マイペースに楽しめる"
        ]
    }
};

// ========================================
// 3. 変数の準備
// ========================================
let currentQuestion = 0; // 現在の質問番号（0から始まる）
let scores = { // 各シャーシのポイント
    tt02: 0,
    rd20: 0,
    miniZ: 0,
    ta08: 0,
    trf421: 0,
    cc02: 0,
    mp11: 0,
    m08: 0
};
let answerHistory = []; // 過去の回答を記録する配列

// ========================================
// 4. HTML要素を取得
// ========================================
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const choicesDiv = document.getElementById('choices');
const currentQuestionSpan = document.getElementById('current-question');
const progressBar = document.getElementById('progress');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultFeatures = document.getElementById('result-features');
const restartBtn = document.getElementById('restart-btn');
const shareXBtn = document.getElementById('share-x');
const shareLineBtn = document.getElementById('share-line');
const copyUrlBtn = document.getElementById('copy-url');
const backBtn = document.getElementById('back-btn'); // 戻るボタン

// ========================================
// 5. 「診断を始める」ボタン
// ========================================
startBtn.addEventListener('click', function() {
    startScreen.classList.remove('active'); // スタート画面を非表示
    questionScreen.classList.add('active'); // 質問画面を表示
    showQuestion(); // 最初の質問を表示
});

// ========================================
// 6. 質問を表示する関数
// ========================================
function showQuestion() {
    const q = questions[currentQuestion]; // 現在の質問データを取得
    
    // 質問番号を更新
    currentQuestionSpan.textContent = currentQuestion + 1;
    
    // プログレスバーを更新
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = progress + '%';
    
    // 質問文を表示
    questionText.textContent = q.question;
    
    // 選択肢をクリア
    choicesDiv.innerHTML = '';
    
    // 選択肢を作成
    q.choices.forEach(function(choice, index) {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.addEventListener('click', function() {
            selectAnswer(choice.points); // 選択されたらポイントを加算
        });
        choicesDiv.appendChild(button);
    });
    
    // 戻るボタンの表示/非表示
    if (currentQuestion > 0) {
        backBtn.style.display = 'block'; // Q2以降は表示
    } else {
        backBtn.style.display = 'none'; // Q1は非表示
    }
}

// ========================================
// 7. 回答を選択したときの処理
// ========================================
function selectAnswer(points) {
    // 回答履歴に記録
    answerHistory.push(points);
    
    // ポイントを加算
    for (let chassis in points) {
        scores[chassis] += points[chassis];
    }
    
    // 次の質問へ
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        // まだ質問が残っている
        showQuestion();
    } else {
        // 全ての質問が終わった
        showResult();
    }
}

// ========================================
// 7.5. 戻るボタンの処理
// ========================================
backBtn.addEventListener('click', function() {
    if (currentQuestion > 0) {
        // 1つ前の質問に戻る
        currentQuestion--;
        
        // 前回の回答のポイントを取り消す
        const lastAnswer = answerHistory.pop(); // 履歴から最後の回答を取り出す
        for (let chassis in lastAnswer) {
            scores[chassis] -= lastAnswer[chassis]; // ポイントを引く
        }
        
        // 質問を表示
        showQuestion();
    }
});

// ========================================
// 8. 結果を表示する関数
// ========================================
function showResult() {
    // 質問画面を非表示
    questionScreen.classList.remove('active');
    
    // 一番ポイントが高いシャーシを見つける
    let maxScore = 0;
    let resultChassis = 'tt02'; // デフォルト
    
    for (let chassis in scores) {
        if (scores[chassis] > maxScore) {
            maxScore = scores[chassis];
            resultChassis = chassis;
        }
    }
    
    // 結果データを取得
    const result = results[resultChassis];
    
    // 結果を表示
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;
    
    // 画像を表示
    const resultImg = document.getElementById('result-img');
    resultImg.src = result.image;
    resultImg.alt = result.name;
    
    // ラジコンあるあるを表示
    const triviaDiv = document.getElementById('rc-trivia');
    triviaDiv.innerHTML = `
        <p><strong>🔧 愛用工具:</strong> ${result.trivia.tool}</p>
        <p><strong>😊 休日の過ごし方:</strong> ${result.trivia.hobby}</p>
        <p><strong>🍀 ラッキーパーツ:</strong> ${result.trivia.luckyPart}</p>
    `;
    
    // 特徴リストを作成
    resultFeatures.innerHTML = '';
    result.features.forEach(function(feature) {
        const li = document.createElement('li');
        li.textContent = feature;
        resultFeatures.appendChild(li);
    });
    
    // 結果画面を表示
    resultScreen.classList.add('active');
}

// ========================================
// 9. 「もう一度診断する」ボタン
// ========================================
restartBtn.addEventListener('click', function() {
    // スコアをリセット
    scores = {
        tt02: 0,
        rd20: 0,
        miniZ: 0,
        ta08: 0,
        trf421: 0,
        cc02: 0,
        mp11: 0,
        m08: 0
    };
    
    // 質問番号をリセット
    currentQuestion = 0;
    
    // 回答履歴をリセット
    answerHistory = [];
    
    // 結果画面を非表示
    resultScreen.classList.remove('active');
    
    // スタート画面を表示
    startScreen.classList.add('active');
});

// ========================================
// 10. シェア機能
// ========================================

// Xでシェア
shareXBtn.addEventListener('click', function() {
    const text = resultTitle.textContent + '\n\nRCシャーシ性格診断をやってみよう！\n';
    const url = window.location.href;
    const twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
    window.open(twitterUrl, '_blank');
});

// LINEでシェア
shareLineBtn.addEventListener('click', function() {
    const text = resultTitle.textContent + ' - RCシャーシ性格診断';
    const url = window.location.href;
    const lineUrl = 'https://line.me/R/msg/text/?' + encodeURIComponent(text + ' ' + url);
    window.open(lineUrl, '_blank');
});

// URLをコピー
copyUrlBtn.addEventListener('click', function() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(function() {
        alert('URLをコピーしました！');
    });
});
