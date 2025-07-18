import React from 'react';

function MotionsArticle() {
  return (
    <article className="max-w-6xl mx-auto p-10 text-white  leading-relaxed space-y-12">
      <header className="text-center border-b border-gray-300 pb-6 mb-10">
        <h1 className="text-5xl font-bold uppercase tracking-wider">Types of Motions</h1>
        <p className="text-lg italic mt-2 text-gray-600">A classical overview for debaters</p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-3">This House regrets (THR):</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>The proposition is required to present the negative consequences of a particular event or trend and then present the world had that event or trend not happened.</li>
            <li>Opposition teams then have to explain why the event/trend was beneficial and why the alternative would have been worse.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">This House Believes (THB):</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>This is an analysis motion.</li>
            <li>A mechanism is generally not required.</li>
            <li>Arguments are for the truth or falsity of a particular statement.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">This House Supports/Opposes:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>This House Supports:</strong> Policy motions</li>
            <li><strong>This House Opposes:</strong> This House Regrets motion but in the present tense</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">This House as X:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Actor motions</li>
            <li>This motion requires all teams to look at the policy/event/trend from one specific point of view.</li>
            <li>Debaters are required to consider the best interests of the actor.</li>
          </ul>
        </section>

        <section className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-3">This House Would (THW):</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>This is a policy motion.</li>
            <li>The proposition is arguing for the passing of specific policy.</li>
            <li>Opening Government has a lot of latitude in deciding aspects of the policy:</li>
            <ul className="list-[circle] pl-8 space-y-1">
              <li>Who is implementing said policy</li>
              <li>Where it is being implemented in the policy</li>
            </ul>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default MotionsArticle;
