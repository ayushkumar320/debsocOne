import React from "react";

function MotionArticle2 (){
    return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-4 font-serif text-gray-100">
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">Understanding Debate Motions</h2>
          <p className="mb-4 text-lg leading-relaxed">
            This article delves into the intricacies of debate motions, specifically dissecting "This House Believes That" (THBT) and "This House Would" (THW) formats. We'll also explore crucial concepts like "Mechanism" and "Fiat" that underpin effective argumentation.
          </p>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">1. Types of Motions</h3>
            <ul className="list-disc list-inside ml-4">
              <li className="mb-1"><strong className="text-red-400">THBT = This House Believes That</strong></li>
              <li><strong className="text-red-400">THW = This House Would</strong></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">2. THBT = This House Believes That</h3>
            <ul className="list-disc list-inside ml-4 leading-relaxed">
              <li className="mb-2"><strong>Basic motion type:</strong> Argue for or against a given action/policy.</li>
              <li className="mb-2"><strong>Principle/Pragmatic:</strong> Explain why the action is moral, or why it has positive impacts on a specific actor/society.</li>
              <li><strong>Metrics:</strong> Set clear metrics to measure the harms and positive impacts of the action.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">3. THW = This House Would</h3>
            <ul className="list-disc list-inside ml-4 leading-relaxed">
              <li className="mb-2"><strong>Would = Action:</strong> In 'THBT' motions you argue if a notion/value is right or wrong. A 'THW' motion requires each side to justify the action that is being carried out by the side.</li>
              <li><strong>Mechanism:</strong> Teams define a plan that achieves the outcome of the motion in order to defend the "how".</li>
            </ul>
          </div>

          {/* Removed mb-6 from this div */}
          <div className="">
            <h3 className="text-2xl font-semibold mb-3 border-b border-gray-600 pb-2">4. What is Fiat?</h3>
            <p className="mb-2 leading-relaxed">
              <strong className="text-red-400">Fiat</strong> = scope of the assumptions and claims that each side can make within reasonable boundaries.
            </p>
            <ul className="list-disc list-inside ml-4 leading-relaxed">
              <li className="mb-2">While drafting policies, both sides make reasonable assumptions about how much they can change and how different actors respond to that change.</li>
              <li className="mb-2">When proposition claims that they can regulate drug sales to prevent overdoses, opposition cannot question it until there is logical analysis to refute it.</li>
              <li>To ensure fairness, opposition can exercise the same amount of fiat i.e. they have the ability to crack down on blackmarkets to the same extent as drug dispensaries are regulated.</li>
            </ul>
          </div>
        </section>

        <aside className="md:col-span-1 space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-3 text-green-400">5. Example Motion: THBT all professional sports teams should be majority fan-owned</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold mb-1">What should gov prove?</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1">Why do fans have a legitimate stake in the ownership of sports teams?</li>
                  <li>Why does the quality of grassroots sports improve when fans own a sports team?</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-1">What should opp prove?</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1">Why does private ownership mean more capital for sports teams?</li>
                  <li>Why is more money good for (a) individual teams and by extension their fans (b) for sport itself?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-3 text-purple-400">6. Example Motion: THW legalise all class C drugs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold mb-1">Government Model:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1">Removal of all drug related offences from criminal prosecution.</li>
                  <li>Regulated drug dispensaries with strict limits for individuals as determined by a doctor.</li>
                </ul>
                <p className="mt-2 text-xs italic">
                  <strong className="text-gray-500">Context:</strong> In cities with thriving drug black markets and overdose deaths, this regulated access saves lives and offers cheaper prices to undercut the black market.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1">Opposition Alternative:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li className="mb-1">Stricter drug control through better policing & fairer CJS reforms over time.</li>
                  <li>Identify at-risk individuals in schools, through the social security system to provide therapy prior to addiction and rehab if addicted.</li>
                </ul>
                <p className="mt-2 text-xs italic">
                  <strong className="text-gray-500">Context:</strong> Legalising drugs, increases access and chance of addiction; craving for harder drugs - more OD deaths.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold mb-3 text-orange-400">7. Motions to think about!</h3>
            <div className="mb-4">
              <h4 className="font-bold mb-1">THBT motions:</h4>
              <ul className="list-disc list-inside ml-4 text-sm leading-relaxed">
                <li className="mb-1">THBT environmental activists should advocate for nuclear power</li>
                <li className="mb-1">THBT the West should look to establish diplomatic relationships with the Taliban government</li>
                <li>THBT Queer movements in progressive nations should focus their campaigning on family friendly content as opposed to sexual liberation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-1">THW motions:</h4>
              <ul className="list-disc list-inside ml-4 text-sm leading-relaxed">
                <li className="mb-1">THW allow companies to buy the rights to economically failing cities</li>
                <li className="mb-1">THW make a minimum educational qualification mandatory for politicians being nominated for positions in the cabinet</li>
                <li>THW eliminate all patents resulting from scientific research that was entirely publicly funded</li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );

}
export default MotionArticle2