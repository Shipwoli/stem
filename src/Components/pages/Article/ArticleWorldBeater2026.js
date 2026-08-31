import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Articleworldbeater2026.css";

import cover from "./assets/cover.jpg";
import training from "./assets/training.jpg";
import trophy from "./assets/trophy.jpg";
import flagCeremony from "./assets/flag-ceremony.jpg";
import coachPeninnah from "./assets/coach-peninnah.jpg";
import coachSaviour from "./assets/coach-saviour.jpg";
import venue from "./assets/venue-bp-hall.jpg";

const ArticleWorldBeater2026 = () => {
  return (
    <main className="article-page">
      <Helmet>
        <title>World Beater: Ivin Irungu Migwi Brings Home Medals from RobotChallenge World 2026 | Stemtrix</title>
        <meta
          name="description"
          content="Kenya brings home medals from the World Robot Challenge 2026. Read how Stemtrix student Ivin Irungu Migwi earned two international second-place finishes in Beijing, and what's next for Inspire Robotics Challenge 2027."
        />
        <meta
          name="keywords"
          content="Ivin Irungu Migwi, World Robot Challenge 2026, RobotChallenge World 2026, Beijing robotics, Inspire Robotics Challenge 2027, Stemtrix, Kenya robotics, LEGO Line Follower, RC.CODE Python"
        />
        {/* NOTE: replace with your real production domain */}
        <link rel="canonical" href="https://www.stemtrix.co.ke/news/world-beater-2026" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="World Beater: Ivin Irungu Migwi Brings Home Medals from RobotChallenge World 2026"
        />
        <meta
          property="og:description"
          content="Kenya brings home medals from the World Robot Challenge 2026 — the story of Stemtrix student Ivin Irungu Migwi's journey to Beijing."
        />
        {/* NOTE: needs to be an absolute URL once this image is hosted */}
        <meta property="og:image" content="https://www.stemtrix.co.ke/news/world-beater-2026-cover.jpg" />
        <meta property="og:url" content="https://www.stemtrix.co.ke/news/world-beater-2026" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "World Beater: Kenya Brings Home Medals from the World Robot Challenge 2026",
            description:
              "Stemtrix student Ivin Irungu Migwi earned two international second-place finishes at RobotChallenge World 2026 in Beijing.",
            author: { "@type": "Organization", name: "Stemtrix" },
            publisher: { "@type": "Organization", name: "Stemtrix" },
            mainEntityOfPage: "https://www.stemtrix.co.ke/news/world-beater-2026"
          })}
        </script>
      </Helmet>

      {/* Cover / Hero */}
      <header className="article-hero">
        <img src={cover} alt="Ivin Irungu Migwi holding the Kenyan flag at RobotChallenge World 2026" className="article-hero-img" />
        <div className="article-hero-scrim"></div>
        <Container className="article-hero-content">
          <span className="article-kicker">
            Kenya brings home medals from the World Robot Challenge 2026
          </span>
          <h1 className="article-hero-title">
            WORLD<br /><span className="accent">BEATER</span>
          </h1>
          <p className="article-hero-name">Ivin Irungu Migwi</p>
          <div className="article-hero-teasers">
            <span>Man of the moment: Ivin's journey to the robotics world stage in Beijing</span>
            <span className="divider">·</span>
            <span>Inspire Robotics 2027: journey to China begins</span>
          </div>
        </Container>
      </header>

      {/* Man of the Moment */}
      <section className="article-section">
        <Container>
          <Row className="mb-4">
            <Col lg={4}>
              <div className="article-kicker small">Man of the Moment</div>
              <h2 className="article-h2">Man of the Moment</h2>
            </Col>
            <Col lg={8}>
              <p className="article-lede">
                From Stemtrix practice sessions to the world stage, Ivin Irungu's hard work with
                his trainers earned him second place in Beijing, showcasing determination.
              </p>
            </Col>
          </Row>

          <figure className="article-figure">
            <img src={training} alt="Ivin Irungu training with his coach at the World Robot Challenge in Beijing" />
            <figcaption>Ivin Irungu at the World Robot Challenge in Beijing</figcaption>
          </figure>

          <Row className="g-5 article-body-columns">
            <Col md={6}>
              <p>
                For Ivin Irungu, the journey to the world stage in Beijing began much closer to
                home. Weeks before he travelled to China, Ivin had already proven himself at the
                Inspire Robotics Challenge in Nairobi, where he emerged among the top performers
                in a competition that brought together students from several schools. The Nairobi
                edition followed the successful conclusion of the Inspire Robotics Challenge at St
                Andrew's School, Turi, bringing together young innovators to compete, create and
                solve problems through robotics.
              </p>
              <p>
                His performance earned him the opportunity to take on an even bigger challenge.
                But reaching the international stage required more than talent. It demanded
                preparation, persistence and plenty of debugging.
              </p>
            </Col>
            <Col md={6}>
              <p>
                Ivin returned to Stemtrix time and again to work alongside his coaches, testing
                his robot, identifying problems in his code and fixing bugs to ensure that
                everything was running as smoothly as possible. Each training session was an
                opportunity to refine his programming, improve his robot's performance and prepare
                for the demands of international competition.
              </p>
              <p>
                That preparation would be put to the test in Beijing at RobotChallenge World 2026,
                where young robotics and coding enthusiasts gathered to compete across different
                categories. Among those representing Kenya were students from Premier Academy,
                alongside students from Brookhouse School Nairobi, who travelled to China for the
                competition.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pull quote — director */}
      <section className="article-quote-section">
        <Container>
          <blockquote>
            "We are incredibly proud of Ivin. Seeing Stemtrix's impact recognised on the world
            stage is a proud moment, and his achievement shows what young minds can accomplish
            with the right training and support."
          </blockquote>
          <cite>Christine Achieng, Director, Stemtrix</cite>
        </Container>
      </section>

      {/* Trophy photo + results */}
      <section className="article-section alt">
        <Container>
          <figure className="article-figure">
            <img src={trophy} alt="Ivin Irungu posing with his runners-up trophies at RobotChallenge World 2026" />
            <figcaption>Ivin Irungu posing with his runners-up trophies</figcaption>
          </figure>

          <Row className="g-4 article-quad-columns">
            <Col md={3}>
              <p>
                For Ivin, the challenge came in two disciplines: the LEGO Line Follower Junior
                category and RC.CODE Python Group A. He would ultimately finish second in both,
                earning two Second Prize awards on the international stage.
              </p>
              <p>
                His coaches had seen the potential long before the results were announced. Coach
                Peninah Mutheu described Ivin as a student who was always ready to identify and
                fix bugs in his code. She noted his strong interest in coding, as well as his
                attentiveness and friendly nature throughout the training process.
              </p>
            </Col>
            <Col md={3}>
              <p>
                Coach Saviour Khalwale said Ivin's second-place finish did not come as a surprise.
                "He was one of the best students," Khalwale said, adding that he believes Ivin has
                the potential to grow into one of the country's best coders. Even in the final week
                before travelling to China, Khalwale recalls Ivin making his ambition clear: he had
                promised his coach that he was going to win.
              </p>
              <p>
                Although he did not return with the top prize, Ivin returned with something
                equally significant: two international second-place finishes and valuable
                experience competing on one of the world's biggest robotics stages.
              </p>
            </Col>
            <Col md={3}>
              <p>
                For Stemtrix Director Christine Achieng, the achievement represented more than
                medals. She celebrated Ivin's performance while expressing her excitement at seeing
                the Stemtrix name and its impact recognised on the international stage.
              </p>
              <p>
                She congratulated Ivin for his determination, hard work and commitment throughout
                the preparation period, noting that his achievement reflects what young learners
                can accomplish when talent is matched with consistent training, mentorship and
                opportunity.
              </p>
            </Col>
            <Col md={3}>
              <p>
                For Stemtrix, Ivin's achievement is a reminder of the bigger mission behind its
                robotics and coding programmes: giving young people the skills, confidence and
                exposure to compete beyond the classroom and take their ideas to the world.
              </p>
              <p>
                And for Ivin, Beijing was not the finish line. It was another step in a journey
                that began with a robot, a willingness to fix one more bug, and the determination
                to keep getting better.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pull quote — coach */}
      <section className="article-quote-section">
        <Container>
          <blockquote>
            "It was a team effort. We each focused on different aspects of Ivin's preparation, but
            worked closely together to make sure he was ready. His commitment made the process even
            more rewarding."
          </blockquote>
          <cite>Coach Saviour Khalwale, Stemtrix</cite>
        </Container>
      </section>

      {/* Flag + coaches */}
      <section className="article-section">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <figure className="article-figure tall">
                <img src={flagCeremony} alt="Ivin Irungu raising the Kenyan flag at the RobotChallenge World 2026 opening ceremony in Beijing" />
              </figure>
              <p className="article-caption-text">
                Ivin raising the Kenyan flag in Beijing is a powerful symbol of what robotics can
                make possible for young innovators. Through his skill, determination and passion
                for technology, he carried Kenya's presence onto the international stage, showing
                that our young minds can design, build and compete among the world's best.
              </p>
            </Col>
            <Col lg={6}>
              <div className="coach-profile">
                <img src={coachPeninnah} alt="Coach Peninnah Mutheu" />
                <div>
                  <h4>Coach Peninnah Mutheu</h4>
                  <p>
                    Coach Peninnah took Ivin through Python programming and spent countless hours
                    helping him understand the logic behind his code, identify bugs and develop the
                    problem-solving skills needed to perform under competition pressure.
                  </p>
                </div>
              </div>
              <div className="coach-profile">
                <img src={coachSaviour} alt="Coach Saviour Khalwale" />
                <div>
                  <h4>Coach Saviour Khalwale</h4>
                  <p>
                    Coach Saviour took Ivin through EV3 robotics and line-following, spending
                    countless hours helping him fine-tune his robot, troubleshoot his code and
                    improve its accuracy and speed for competition.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Inspire Robotics Challenge 2027 */}
      <section className="article-section alt irc-section">
        <Container>
          <Row className="mb-4">
            <Col lg={5}>
              <div className="article-kicker small">What's Next</div>
              <h2 className="article-h2 irc-title">
                Inspire Robotics<br />Challenge 2027
              </h2>
            </Col>
            <Col lg={7}>
              <p className="article-lede">
                From Stemtrix practice sessions to the world stage, Ivin Irungu's hard work with
                his trainers earned him second place in Beijing, showcasing determination.
              </p>
            </Col>
          </Row>

          <figure className="article-figure">
            <img src={venue} alt="Inspire Robotics Challenge 2026 setup at St Andrew's School, Turi" />
            <figcaption>Inspire Robotics 2026 at St Andrew's Turi</figcaption>
          </figure>

          <Row className="g-5">
            <Col md={6}>
              <p>
                The journey to the next generation of robotics innovation begins in March 2027
                with the return of the Inspire Robotics Challenge, bringing together young
                innovators ready to design, build and solve real-world challenges through robotics,
                engineering and creative thinking.
              </p>
              <p>
                The 2027 theme, <strong>Smart City: Safe Structures</strong>, challenges
                participants to explore how technology and innovation can help create safer,
                smarter and more sustainable cities for the future. Through the challenge, young
                innovators will be encouraged to think beyond building robots and develop solutions
                to problems that communities may face in the cities of tomorrow.
              </p>
              <p>
                The competition also offers an exciting pathway to the international stage, with
                the winners earning the opportunity to represent the country at various
                international robotics competitions in the year.
              </p>
            </Col>
            <Col md={6}>
              <p>
                Preparation is already underway. The 2027 Action Maps are now available from
                Stemtrix, giving participants the opportunity to familiarise themselves with the
                challenges and begin developing their strategies ahead of the competition.
              </p>
              <p>
                Registration is currently open for both individual participants and schools. With
                the next generation of innovators already preparing to take on the challenge, the
                road to March 2027 has officially begun.
              </p>

              <div className="irc-detail-chips">
                <span className="irc-chip">
                  <FaCalendarAlt /> March 2027
                </span>
                <span className="irc-chip">
                  <FaMapMarkerAlt /> Registration open now
                </span>
              </div>

              <Link to="/join-us" className="article-cta-btn">
                Register for Inspire Robotics Challenge 2027 <FaArrowRight className="ms-2" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default ArticleWorldBeater2026;