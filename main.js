const DATA = {
  papers: [
    {
      year: "2026",
      title: "One mountainous city, diverse topographic contexts: Relationships between urban spatial characteristics and land surface temperature across a topographic gradient.",
      authors: "Wang, R., Yang, B., Zhou, L*., Wang, S., Wang, X., Wu, W., Wu, R., Zhao, H.",
      venue: "Sustainable Cities and Society",
      state: "Under Review · First Author",
      featured: true
    },
    {
      year: "",
      title: "Augmenting Permanent Fire Station Networks through Multi-Period Stationing and Repositioning of Mobile Units: A Deep Reinforcement Learning Approach.",
      authors: "Wang, R., Liang, H., Wang, S., Zhou, J., Zhao, H., Wang, H.",
      venue: "ISPRS International Journal of Geo-Information",
      state: "Under Review · First Author",
      featured: true
    },
    {
      year: "2026",
      title: "典型超大山地城市空间梯度演变及其地表热岛响应",
      authors: "王润桥, 杨必胜, 周亮*",
      venue: "遥感技术与应用",
      state: "Accept · First Author",
      featured: true
    },
    {
      year: "2023",
      title: "Optimization of shared bicycle location in Wuhan city based on multi-source geospatial big data.",
      authors: "Wang, S., Wang, R*., Su, C., Zhou, L., Wang, W., Liang, H.",
      venue: "ACM SIGSPATIAL Workshop, 43–46",
      state: "Online · Corresponding Author",
      featured: true
    },
    {
      year: "2026",
      title: "Constraint-Guided Heterogeneous Graph Reinforcement Learning for Spatial Coverage Optimization: A Post-Disaster UAV-BS Deployment Case Study.",
      authors: "Pan, Y., Wang, R., Zhou, H., Zhang, K., Liang, H*.",
      venue: "Electronics",
      state: "Minor Revision Returned · Co-author"
    },
    {
      year: "2024",
      title: "Spatial-temporal evolution characteristics analysis of color steel buildings in Lanzhou city.",
      authors: "Wang, W., Li, X., Wang, T., Wang, S*., Wang, R., Xu, D., Zhou, J.",
      venue: "ISPRS International Journal of Geo-Information, 13(6), 179",
      state: "Online · Co-author"
    },
    {
      year: "",
      title: "顾及需求差异与距离衰减的城市消防设施两阶段增量配置优化",
      authors: "梁浩健, 王润桥, 徐大川, 王少华*, 周亮, 王振波",
      venue: "地球信息科学学报",
      state: "Revised · Co-author"
    },
    {
      year: "2025",
      title: "基于多源时空数据的城市公交站点地理空间优化方法：冗余优化模型",
      authors: "李霄, 王少华*, 梁浩健, 周亮, 刘畅, 王润桥, 苏澄",
      venue: "地球信息科学学报, 27(8), 1822–1840",
      state: "Online · Co-author"
    }
  ],
  others: [
    {
      year: "2026",
      title: "一种顾及地形复杂性的山地城市梯度增长模式判别方法",
      authors: "周亮*, 赵环, 孙钦珂, 王润桥",
      venue: "中国发明专利",
      state: "Substantive Examination"
    },
    {
      year: "",
      title: "城市三维模拟",
      authors: "参与撰写",
      venue: "专著",
      state: "Contributing Author"
    },
    {
      year: "",
      title: "山地城镇化",
      authors: "参与撰写",
      venue: "专著",
      state: "Contributing Author"
    },
    {
      year: "",
      title: "商业地理信息系统",
      authors: "参与撰写",
      venue: "专著",
      state: "Contributing Author"
    }
  ],
  projects: [
    {
      meta: "国家自然科学基金面上项目 · 2026—2029 · 42571259",
      title: "西部典型山地城市梯度演化动态模拟及边界调控",
      desc: "城市建设用地坡谱、梯度演化模拟、地形约束机制，以及城市边界调控。",
      work: "参与申报书撰写。"
    },
    {
      meta: "甘肃省联合科研基金重大项目 · 2025—2028 · 25JRRA1156",
      title: "耦合地理图景与 GeoAI 的城市群山洪智能模拟与地图综合制图",
      desc: "山洪风险评估、动态过程模拟和空间决策支持系统。",
      work: "参与申报，负责决策支持系统的方案、文字和图表。"
    },
    {
      meta: "CBAS SDG 报告子课题 · 2025 · AIRZB762025000984",
      title: "地球大数据支撑城市可持续发展目标研究：SDG 10 周年特别报告",
      desc: "评估省会城市公共开放空间中的灰绿空间配置。",
      work: "参与 SDG 11.7，制备六个省会城市的数据并评估服务人口。"
    },
    {
      meta: "CBAS SDG 报告子课题 · 2023 · CBAS2023SDG004",
      title: "地球大数据支撑城市可持续发展目标研究",
      desc: "公共交通、非正规住房和城市灾害的空间案例。",
      work: "参与 SDG 11.2.1 公共交通可达性，负责数据整理、指标计算和报告修订。"
    }
  ]
};

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[character]));

const markAuthor = value => escapeHtml(value).replace(/(?:Wang, R\b\.?|王润桥)\*?/g, name => `<span class="me">${name}</span>`);

const splitState = state => {
  const [status, role] = state.split(" · ");
  return { status: status || state, role: role || "" };
};

const featuredPaper = (item, index) => {
  const { status, role } = splitState(item.state);
  return `
    <article class="feature-paper">
      <div class="paper-top">
        <span>论文 ${String(index + 1).padStart(2, "0")}</span>
        <span class="role">${escapeHtml(role)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="authors">${markAuthor(item.authors)}</p>
      <p class="venue">${escapeHtml(item.venue)}</p>
      <div class="paper-bottom">
        <span class="status">${escapeHtml(status)}</span>
        <span class="year">${item.year ? escapeHtml(item.year) : ""}</span>
      </div>
    </article>
  `;
};

const paperRow = (item, number) => {
  const { status, role } = splitState(item.state);
  return `
    <article class="paper-row">
      <span class="paper-year">${number ? `论文 ${String(number).padStart(2, "0")}<br>` : ""}${item.year || "—"}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="authors">${markAuthor(item.authors)}</p>
        <p class="venue">${escapeHtml(item.venue)}</p>
      </div>
      <p class="paper-result">${escapeHtml(status)}${role ? `<br>${escapeHtml(role)}` : ""}</p>
    </article>
  `;
};

const projectRow = (item, index) => `
  <article class="project-row">
    <span class="project-index">P.${String(index + 1).padStart(2, "0")}</span>
    <div class="project-main">
      <h3>${escapeHtml(item.title)}</h3>
      <p class="desc">${escapeHtml(item.desc)}</p>
      <p class="project-meta">${escapeHtml(item.meta)}</p>
    </div>
    <p class="project-role">${escapeHtml(item.work)}</p>
  </article>
`;

const featured = DATA.papers.filter(item => item.featured);
const otherPapers = DATA.papers.filter(item => !item.featured);

document.getElementById("feature-list").innerHTML = featured.map(featuredPaper).join("");
document.getElementById("paper-list").innerHTML = otherPapers.map((item, index) => paperRow(item, featured.length + index + 1)).join("");
document.getElementById("other-list").innerHTML = DATA.others.map(item => paperRow(item)).join("");
document.getElementById("project-list").innerHTML = DATA.projects.map(projectRow).join("");

