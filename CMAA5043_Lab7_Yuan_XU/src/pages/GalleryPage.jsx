import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import QingcloudImage from '../assets/Qingcloud.png';

function GalleryPage() {
    // Lab 3 Exercises - Define projects data to be rendered via Gallery
    const projectData = [
        {
            id: 1,
            title: "筑语书",
            author: "Xuan",
            links: [{ text: "View Details Page", url: "/projects/project1" }],
            image: "/img/project1/teaser.png",
            description: "以古建筑为主题的立体书交互解谜游戏。古建筑结构的相关知识（如斗拱、藻井等） 立体书解谜技巧（如Z形折、拉杆结构等）。让书外的玩家体验建筑背后的故事——建筑可读。立体的中国古建筑史，纸上之筑的\"奇观\"。玩家可以对纸进行拖拽、翻折、切换、推动的基础操作，通过这些机制的相互作用与配合，改变关卡的场景地形 and 建筑结构，为角色创造可行的道路。"
        },
        {
            id: 2,
            title: "步轻云",
            author: "Xuan",
            links: [],
            image: QingcloudImage,
            description: "“步轻云”产品是一款专注于老年人神经退行性疾病防治的健康监测平台，配合智能鞋垫生成健康报告与个性化防治方案，助力中老年人身心健康，打造适老化社会生态。随着我国人口老龄化现象进一步加深，以帕金森、老年痴呆、渐冻症为代表的神经退行性疾病已经成为继心血管疾病、癌症后的老年人第三大杀手。本项目致力于通过步态信息的收集，实现神经退行性疾病的早期发现，减少痛苦和医疗开支；关爱老人，提供医疗建议和突发情况（摔倒）的及时应对。本项目可以以较小的成本在帕金森等神经退行性疾病早期及时发现，及时抑制病程进展、提高生活质量、减小医疗开支；应对摔倒等突发情况向设定的紧急联系人发出警告，引导其做进一步的应对。"
        }
    ];

    return (
        <>
            <Header title="Project Gallery" />

            <main>
                <h2>Work Showcase</h2>
                <p>Explore some of the projects I've worked on recently:</p>

                {/* Lab 3 Exercises - Render projects using the new Gallery Component  */}
                <div style={{ marginTop: '20px' }}>
                    {projectData.map(proj => (
                        <Gallery
                            key={proj.id}
                            image={proj.image}
                            title={proj.title}
                            author={proj.author}
                            links={proj.links}
                            description={proj.description}
                        />
                    ))}
                </div>

                <hr style={{ margin: '2rem 0' }} />
                <h3>Other Links</h3>
                <ul>
                    <li><Link to="/projects/project2">Project 2: BBB</Link></li>
                    <li><Link to="/projects/project3">Project 3: CCC</Link></li>
                </ul>
            </main>

            <Footer />
        </>
    );
}

export default GalleryPage;
