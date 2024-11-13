import React, { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (event) => {
    const value = event.target.value;
    setInterests((prevInterests) =>
      prevInterests.includes(value)
        ? prevInterests.filter((interest) => interest !== value)
        : [...prevInterests, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      {submitted ? (
        <div role="alert">
          <h2>Thank you for signing up, {name}!</h2>
          <p>We will send updates to {email}.</p>
          {interests.length > 0 && (
            <p>Your interests: {interests.join(', ')}</p>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <fieldset>
            <legend>Select your interests:</legend>
            <label>
              <input
                type="checkbox"
                value="Coding"
                checked={interests.includes('Coding')}
                onChange={handleInterestChange}
              />
              Coding
            </label>
            <label>
              <input
                type="checkbox"
                value="Design"
                checked={interests.includes('Design')}
                onChange={handleInterestChange}
              />
              Design
            </label>
            <label>
              <input
                type="checkbox"
                value="Marketing"
                checked={interests.includes('Marketing')}
                onChange={handleInterestChange}
              />
              Marketing
            </label>
          </fieldset>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </main>
  );
}

export default App;
