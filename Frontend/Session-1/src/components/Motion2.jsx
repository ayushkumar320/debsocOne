import React from "react";

function MotionsArticle3() {
     return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-4 font-serif text-gray-100">
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Understanding More Debate Motion Types</h2>
          <p className="mb-4 text-lg leading-relaxed">
            This article expands on debate motions, introducing "This House, as X" (TH, as X), "This House Regrets" (THR), and "This House Supports/Opposes" (THS/THO) formats, providing deeper insights into their unique argumentative requirements.
          </p>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">1. Types of Motions</h3>
            <ul className="list-disc list-inside ml-4">
              <li className="mb-1"><strong className="text-red-400">This House, as X</strong></li>
              <li className="mb-1"><strong className="text-red-400">THR = This House Regrets</strong></li>
              <li><strong className="text-red-400">THS/THO = This House Supports/Opposes</strong></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">2. This House, as X, would do...</h3>
            <ul className="list-disc list-inside ml-4 leading-relaxed">
              <li className="mb-2"><strong>"As X"</strong>: X often refers to the specific actor who is either carrying out the policy or who's interests must be fulfilled.</li>
              <li><strong>Incentives</strong>: Every action is motivated by a need to reach a specific end goal that is beneficial for the actor. Teams must explain what the end goal is, why this is the most important end goal for the actor, and how exactly it gets achieved.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">3. Example Motion: TH, as women from privileged backgrounds, will turn down benefits arising from affirmative action programmes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold mb-1">Gov Incentives:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1">As someone who was brought up in a rich and connected family by lottery of birth, it feels morally wrong to take away the opportunities from people that actually need it.</li>
                  <li className="mb-1">Even if she reaches top leadership positions, it will be viewed as a function of the quota rather than her talent.</li>
                  <li>The guilt and lack of respect will make it harder for her to work effectively.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">Opp Incentives:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1">Privilege does not guarantee success, especially in professions dominated by old boy's clubs and historically led by men.</li>
                  <li className="mb-1">Therefore, affirmative action policies greatly increase the chances of them reaching top leadership positions.</li>
                  <li>They can then leverage their power and authority to expand the access to opportunities to all women.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">4. THR = This House Regrets</h3>
            <ul className="list-disc list-inside ml-4 leading-relaxed">
              <li className="mb-2"><strong>Retrospective</strong>: Evaluate past actions based on their impacts in the present, and analyze why this was beneficial or detrimental for certain actors.</li>
              <li><strong>Counterfactual</strong>: Teams that regret the motion must provide reasoning about:
                <ul className="list-circle list-inside ml-4 mt-1">
                  <li className="mb-1">What the alternative could have been in the absence of this virtue or notion.</li>
                  <li className="mb-1">Why it is the most likely alternative.</li>
                  <li>How different would their world be.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <aside className="md:col-span-1 space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-3 text-green-400">5. Example Motion: THR the rise of social media as being the primary source of news</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold mb-1">Gov Burden:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1"><strong>Alternative?</strong>
                    <ul className="list-circle list-inside ml-4 mt-1">
                      <li className="mb-1">Traditional media sources, with a greater digital presence.</li>
                      <li>Innovative new age media - Vox, Axios, The Athletic.</li>
                    </ul>
                  </li>
                  <li><strong>How has this rise changed news consumption?</strong>
                    <ul className="list-circle list-inside ml-4 mt-1">
                      <li className="mb-1">Most people reading trending tweets, Instagram posts to be informed about facts.</li>
                      <li>News becoming less analytical and more anecdotal.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">Opp Burden:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1"><strong>How would the world have been in the absence of social media?</strong>
                    <ul className="list-circle list-inside ml-4 mt-1">
                      <li className="mb-1">Lesser access - scale (1 billion Facebook users vs 5 million NYTimes readers) and the nature of news published.</li>
                      <li>Local news/information will not be as accessible - this has max utility.</li>
                    </ul>
                  </li>
                  <li>Mitigate the negative effects of social media in current society but cannot argue different policies that can fix it.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-3 text-purple-400">6. THS/O = This House Supports/Opposes</h3>
            <ul className="list-disc list-inside ml-4 leading-relaxed">
              <li className="mb-2"><strong>Burden</strong>: Argue why a certain action is right or wrong based on evidence.</li>
              <li><strong>How is this different from THBT/THW?</strong>
                <ul className="list-circle list-inside ml-4 mt-1">
                  <li className="mb-1">THBT = policy i.e. teams can design new solutions to mitigate problems vs THO = teams must show the efficiency of existing policies.</li>
                  <li>Teams MUST set up a counterfactual in these motions.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-3 text-orange-400">7. Example Motion: THS non-violent property damage in order to stop climate change</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold mb-1">Gov Burden:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1"><strong>How does it look like?</strong>
                    <ul className="list-circle list-inside ml-4 mt-1">
                      <li className="mb-1">Blowing up pipelines, sabotaging logging equipment.</li>
                      <li>Meant to suspend operations temporarily and abruptly, causing losses.</li>
                    </ul>
                  </li>
                  <li><strong>When can we support this?</strong>
                    <ul className="list-circle list-inside ml-4 mt-1">
                      <li className="mb-1">Brings popular attention to forgotten climate issues.</li>
                      <li>In the long term, increase costs for polluting companies, which leads to suspending production or becoming cleaner.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">Opp Burden:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1"><strong>Counterfactual</strong>: civil protests, lawsuits, support activist investors and back politicians that push for greener policies/stricter controls.</li>
                  <li className="mb-1"><strong>Tradeoff?</strong> Takes time in order to effect change, but saves the reputation environmental organisations and keeps an open channel of negotiation rather than confrontation.</li>
                  <li><strong>Why oppose this?</strong> Unlikely to change behavior, at the cost of more environmental damage, and being portrayed as violent on popular media.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-3 text-red-400">8. Motions to think about!</h3>
            <ul className="list-disc list-inside ml-4 leading-relaxed">
              <li className="mb-2"><strong>TH, as the IOC, would allow athletes to use performance-enhancing drugs in the Olympics</strong>
                <p className="text-xs italic text-gray-500 ml-4">(Think about how this is different from THW legalise performance-enhancing drugs)</p>
              </li>
              <li className="mb-2"><strong>TH, as the Biden Administration, would not have withdrawn from Afghanistan</strong>
                <p className="text-xs italic text-gray-500 ml-4">(This House Opposes Joe Biden's decision to withdraw American troops from Afghanistan)</p>
              </li>
              <li className="mb-2">THR the characterisation of greed as immoral</li>
              <li className="mb-2">THR the rising trend in pop culture to portray villains as a victim of society</li>
              <li className="mb-2">THR the increasing disinvestment in Public Sector Undertakings in India</li>
              <li className="mb-2">THS the existence of a technology that lets people see the alternative outcomes of major life decisions they have made</li>
              <li className="mb-2">THO states offering to make reparations through the acceptance of refugees</li>
              <li>THO the glorification of resilience as a positive trait</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );


}
export default MotionsArticle3;