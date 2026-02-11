import "./Content.css";

export default function Content() {
  return (
    <main className="content">
      <section className="story">
        <h2>Summary</h2>

        <p>
          NASA’s “From Hidden to Modern Figures” highlights the legacy of African-American women
          whose work was essential to the success of early spaceflight. The page connects the popular
          film and book “Hidden Figures” to the real people behind the story—brilliant mathematicians
          and engineers who performed critical calculations and solved problems during an era when
          opportunities were limited by segregation and discrimination.
        </p>

        <p>
          The story features Katherine G. Johnson, Mary W. Jackson, Dorothy Vaughan, and Christine Darden.
          Their paths were not always direct—some began as teachers or “human computers,” then pushed into
          advanced roles through talent, persistence, and hard-earned opportunities. Their achievements
          helped propel NASA’s missions and also opened doors for future generations in STEM.
        </p>

        <p>
          The page also shows how their impact is recognized today—such as honors for NASA’s Hidden Figures
          and the continued celebration of “Modern Figures” at NASA. The overall message is that the people
          behind the scenes matter, and acknowledging their contributions changes how we understand history—
          and who gets to be seen as a pioneer.
        </p>
      </section>

      <section className="images">
        <h2>History Makers</h2>

        <div className="imgGrid">
          <figure className="card">
            <img src="/images/KJOHNSON.jpg" alt="Katherine Johnson at work" />
            <figcaption>Katherine Johnson</figcaption>
          </figure>

          <figure className="card">
            <img src="/images/MJACKSON.jpg" alt="Mary W. Jackson" />
            <figcaption>Mary W. Jackson</figcaption>
          </figure>

          <figure className="card">
            <img src="/images/DVAUGHN.jpg" alt="Dorothy Vaughan or Christine Darden" />
            <figcaption>Dorothy Vaughan / Christine Darden</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
