const facts = {
    working: "🔭 I’m currently working on",
    learning: "🌱 I’m currently learning",
    reach: "📫 How to reach me",
    portfolio: "👨‍💻 All of my projects are available at",
    resume: "📄 Know about my experiences",
    fun: "⚡ Fun fact:"
};

const generate_name = (name) => {
    const opening = `<h1 align="center">Hello World! 👋 I'm ${name}</h1>`;
    return opening;
};

const generate_description = (desc) => {
    const opening = `<h4 align="center">${desc}</h4>`;
    return opening;
};

const generate_heading = (head) => {
    const heading = `<h2 align="left">${head}</h2>`;
    return heading;
}

const generate_facts = (fact, val) => {
    let point;
    if (fact == "reach" || fact == "portfolio" || fact == "resume") {
        point = `- ${facts[fact]} *[${val}](${val})*`;
    } else {
        point = `- ${facts[fact]} **${val}**`;
    }
    return point;
};

const generate_visitors = (name) => {
    const url = `<p align="left"><img src="https://komarev.com/ghpvc/?username=${name}&label=Profile%20views&color=0e75b6&style=flat" /></p>`;
    return url;
};

const generate_trophy = (name) => {
    const url = `<p align="center"><img src="https://github-profile-trophy.vercel.app/?username=${name}" /></p>`;
    return url;
};

const generate_topSkills = (name) => {
    const url = `<img src="https://github-readme-stats.vercel.app/api/top-langs?username=${name}&show_icons=true&locale=en&layout=compact" />`;
    return url
};

const generate_stats = (name) => {
    const url = `<img src="https://github-readme-stats.vercel.app/api?username=${name}&show_icons=true&locale=en" />`;
    return url
};

const generate_streaks = (name) => {
    const url = `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${name}&" />`;
    return url;
}

const generate_image = (link) => {
    const img = `<img src="${link}" />`
    return img;
}

const generate_skill = (val) => {
    const api = `https://raw.githubusercontent.com/ryantusi/Github_Profile_README_Generator/main/src/images/icons/${val}.svg`;
    const skill = `<img src="${api}" width='40' height='40' title='${val}'/>`;
    return skill;
}


