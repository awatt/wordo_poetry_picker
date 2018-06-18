let words = [
  "boil",
  "boy",
  "a",
  "breast",
  "a",
  "but",
  "but",
  "butt",
  "about",
  "by",
  "above",
  "by",
  "ache",
  "can",
  "ad",
  "chant",
  "after",
  "chocolate",
  "all",
  "cool",
  "am",
  "could",
  "am",
  "crush",
  "an",
  "cry",
  "an",
  "d",
  "and",
  "day",
  "and",
  "death",
  "and",
  "delirious",
  "and",
  "diamond",
  "apparatus",
  "did",
  "are",
  "do",
  "are",
  "do",
  "arm",
  "dream",
  "as",
  "dress",
  "as",
  "drive",
  "as",
  "drool",
  "as",
  "drunk",
  "ask",
  "eat",
  "at",
  "ed",
  "at",
  "ed",
  "away",
  "ed",
  "bare",
  "egg",
  "be",
  "elaborate",
  "beat",
  "enormous",
  "beauty",
  "er",
  "bed",
  "es",
  "beneath",
  "est",
  "bitter",
  "fast",
  "black",
  "feet",
  "blood",
  "fiddle",
  "blow",
  "finger",
  "blue",
  "fluff",
  "for",
  "is",
  "forest",
  "is",
  "frantic",
  "it",
  "friend",
  "it",
  "from",
  "it",
  "from",
  "juice",
  "garden",
  "lake",
  "girl",
  "language",
  "go",
  "languid",
  "goddess",
  "lather",
  "gorgeous",
  "lazy",
  "gown",
  "less",
  "hair",
  "let",
  "has",
  "lick",
  "have",
  "lie",
  "have",
  "life",
  "he",
  "light",
  "he",
  "like",
  "head",
  "like",
  "heave",
  "like",
  "her",
  "live",
  "her",
  "love",
  "here",
  "luscious",
  "him",
  "lust",
  "his",
  "ly",
  "his",
  "ly",
  "honey",
  "ly",
  "hot",
  "ly",
  "how",
  "mad",
  "I",
  "man",
  "I",
  "me",
  "I",
  "me",
  "I",
  "me",
  "if",
  "mean",
  "in",
  "meat",
  "in",
  "men",
  "in",
  "milk",
  "ing",
  "mist",
  "ing",
  "moan",
  // "ing",
  // "moon",
  // "ing",
  // "mother",
  // "ing",
  // "music",
  // "ing",
  // "must",
  // "is",
  // "my",
  // "is",
  // "my",
  // "is",
  // "my",
  // "need",
  // "s",
  // "the",
  // "y",
  // "never",
  // "s",
  // "the",
  // "y",
  // "no",
  // "s",
  // "their",
  // "yet",
  // "no",
  // "s",
  // "there",
  // "you",
  // "not",
  // "s",
  // "these",
  // "you",
  // "not",
  // "sad",
  // "they",
  // "you",
  // "of",
  // "said",
  // "those",
  // "you",
  // "of",
  // "sausage",
  // "though",
  // "of",
  // "say",
  // "thousand",
  // "of",
  // "scream",
  // "through",
  // "on",
  // "sea",
  // "time",
  // "on",
  // "see",
  // "tiny",
  // "one",
  // "shadow",
  // "to",
  // "or",
  // "she",
  // "to",
  // "our",
  // "she",
  // "to",
  // "over",
  // "shine",
  // "together",
  // "pant",
  // "ship",
  // "tongue",
  // "peach",
  // "shot",
  // "trudge",
  // "petal",
  // "show",
  // "TV",
  // "picture",
  // "sing",
  // "ugly",
  // "pink",
  // "sit",
  // "up",
  // "play",
  // "skin",
  // "urge",
  // "please",
  // "sky",
  // "us",
  // "pole",
  // "sleep",
  // "use",
  // "pound",
  // "smear",
  // "want",
  // "puppy",
  // "smell",
  // "want",
  // "purple",
  // "smooth",
  // "was",
  // "put",
  // "so",
  // "watch",
  // "r",
  // "soar",
  // "water",
  // "r",
  // "some",
  // "wax",
  // "rain",
  // "sordid",
  // "we",
  // "raw",
  // "spray",
  // "we",
  // "recall",
  // "spring",
  // "were",
  // "red",
  // "still",
  // "what",
  // "repulsive",
  // "stop",
  // "when",
  // "rip",
  // "storm",
  // "whisper",
  // "rock",
  // "suit",
  // "who",
  // "rose",
  // "summer",
  // "why",
  // "run",
  // "sun",
  // "will",
  // "rust",
  // "sweat",
  // "wind",
  // "s",
  // "sweet",
  // "with",
  // "s",
  // "swim",
  // "with",
  // "s",
  // "symphony",
  // "woman",
  // "s",
  // "the",
  // "worship",
  // "s",
  // "the",
  // "y",
  // "s",
  // "the"
];


let wordData = words.map(function(word,i){
  return {
    word: word,
    length: word.length,
    id: i,
    selected: false
    }
})

function renderChart(){
  let width = window.innerWidth,
    height = window.innerHeight;

  let svg = d3.select("#chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)")

  let colors = ['#ffffcc','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8']

  let radiusScale = d3.scaleSqrt()
            .domain([1, d3.max(wordData,function(el){ return el.length})])
            .range([11,30])

  let rectWidthScale = d3.scaleLinear()
            .domain([1, d3.max(wordData,function(el){ return el.length})])
            .range([20,60])

  let forceX = d3.forceX(width/2),
      forceY = d3.forceY(height/2),
      forceRadial = d3.forceRadial(height/2.5,width/2,height/2),
      isRadial = false,
      selectedFilter = function(el){ return el.selected === true },
      unselectedFilter = function(el){ return el.selected === false }


  let simulation = d3.forceSimulation()
    .force("x", forceX)
    .force("y", forceY)
    .force("collide", d3.forceCollide(function(d){
      return radiusScale(d.length + 1);
    }))

  let nodeGroup = svg.append("g")
        .attr("class", "nodes")

  function isolate(nodes,force,filter,node) {
      if(filter === null){
        filter = function(el){
          return el.word === node.word
        }
      }
      let initialize = force.initialize
      force.initialize = function() { initialize.call(force, nodes.filter(filter)); };
    return force;
  }

  let node = nodeGroup
        .selectAll("g")
        .data(wordData, d => d.id)
        .enter()
        .append("g")
          .attr("class", "word")
          .on("click", function(d,i){
            let thisNode = d3.select(this);
            if(thisNode.classed("selected")){
              thisNode.classed("selected", false)
            } else {
              thisNode.classed("selected", true)
            }

            //re-run redial force to tighten it up after selection
            let tidyUp = function(){
              simulation
                .force("x", isolate(wordData,forceX.strength(0.06),selectedFilter))
                .force("y", isolate(wordData,forceY.strength(0.06),selectedFilter))
                .force("unSelected", isolate(wordData,forceRadial.strength(0.07),unselectedFilter))
                .alpha(0.8)
                .restart()
            }

            //toggle word selection
            wordData[i].selected = !wordData[i].selected
            if(!isRadial){
              isRadial = true;
              simulation
                .force("x", isolate(wordData,forceX.strength(0.06),selectedFilter))
                .force("y", isolate(wordData,forceY.strength(0.06),selectedFilter))
                .force("unSelected", isolate(wordData,forceRadial.strength(0.07),unselectedFilter))
                .alpha(0.8)
                .restart()
            } else if (wordData[i].selected === false){
              simulation
                .force("unSelected", isolate(wordData,forceRadial.strength(0.06),null,wordData[i]))
                .force("x", null)
                .force("y", null)              
                .alpha(0.8)
                .restart()
                .on("end", tidyUp())
            } else {
              simulation
                .force("unSelected", null)
                .force("x", isolate(wordData,forceX.strength(0.12),selectedFilter))
                .force("y", isolate(wordData,forceY.strength(0.12),selectedFilter))
                .alpha(1.2)
                .restart()
                .on("end", tidyUp())
            }
          })

  let widthScale = function(length){
    return  lengthlength*8;
  }

  let textWidth = [];

  //to calculate text widths - immediately stripped out of dom and re-rendered
  let dummyLabel = node        
        .append("text")
        .style("font-size", "14px")
        .style("font-weight","bold")
        .text(function(d){ return d.word })
        .each(function(d,i) {
            var thisWidth = this.getComputedTextLength()
            textWidth.push(thisWidth)
            this.remove() // remove them just after displaying them
        })        

  let rect = node        
        .append("rect")
        .attr("class", "rect")
        .attr("width", function(d,i) { return textWidth[i] + 16 })
        .attr("height", 26)
        .style("fill", function(d){ return colors[d.length % 6]})
        .attr("fill-opacity", 0.3)
        .style("border-radius", 20) 

  let label = node        
        .append("text")
        .attr("class", "label")
        .style("text-anchor", "middle")
        .attr("transform", function(d,i) { return `translate(${textWidth[i]/2 + 8},17)` })
        .style("font-size", "14px")
        .style("color", "black")
        .style("font-weight","bold")
        .text(function(d){ return d.word })

    simulation.nodes(wordData)
      .on("tick", ticked)

 function ticked() {
    node
      .attr("transform", function(d) {
        return 'translate(' + [d.x, d.y] + ')';
      })
    node
      .attr("transform", function(d,i) {
        // let radius = radiusScale(d.length);
        let widthOffset = textWidth[i],
            heightOffset = 26
        d.x = Math.max(widthOffset, Math.min(width - widthOffset, d.x));
        d.y = Math.max(heightOffset, Math.min(height - heightOffset, d.y));        
        return 'translate(' + [d.x, d.y] + ')';
      })
  }



};


renderChart()







