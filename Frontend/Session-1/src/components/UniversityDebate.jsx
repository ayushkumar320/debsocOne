import React from "react";

function UniversityDebate(){
    return <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black font-serif p-4 sm:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-gray-900 shadow-xl rounded-lg overflow-hidden border-2 border-gray-700">
        <main className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-white">
          <section className="md:col-span-3 pb-4 border-b border-gray-700 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-400 font-sans">
              Introduction to University Debating
            </h2>
            <p className="leading-relaxed text-gray-200 text-lg">
              University debating encompasses various formats, with British Parliamentary and Asian Parliamentary debating being prominent styles. These formats provide platforms for students to hone their critical thinking, public speaking, and analytical skills.
            </p>
          </section>

          <section className="md:col-span-2 border-r md:border-b-0 border-gray-700 pr-4 md:pr-6 pb-4 md:pb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white font-sans">
              British Parliamentary Debating: A Deeper Dive
            </h2>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">Structure:</h3>
              <ul className="list-disc list-inside ml-4 text-gray-200 leading-relaxed">
                <li>Four 2-membered teams:</li>
                <ul className="list-disc list-inside ml-8 mt-1">
                  <li>Opening Government | Opening Opposition</li>
                  <li>Closing Government | Closing Opposition</li>
                </ul>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">Speeches:</h3>
              <ul className="list-disc list-inside ml-4 text-gray-200 leading-relaxed">
                <li>8 x 7 minute speeches</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">Preparation Time:</h3>
              <ul className="list-disc list-inside ml-4 text-gray-200 leading-relaxed">
                <li>15 minutes</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">Speaker Order (Government vs. Opposition):</h3>
              <ol className="list-decimal list-inside ml-4 text-gray-200 leading-relaxed">
                <li>Prime Minister</li>
                <li>Leader of Opposition</li>
                <li>Deputy Prime Minister</li>
                <li>Deputy Leader of Opposition</li>
                <li>Government Whip</li>
                <li>Opposition Whip</li>
                <li>Opposition Reply</li>
                <li>Government Reply</li>
              </ol>
            </div>
          </section>
          <section className="md:col-span-1 pb-4 md:pb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white font-sans">
              Asian Parliamentary Debating
            </h2>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">Structure:</h3>
              <ul className="list-disc list-inside ml-4 text-gray-200 leading-relaxed">
                <li>3v3 - Government vs Opposition</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">Speeches:</h3>
              <ul className="list-disc list-inside ml-4 text-gray-200 leading-relaxed">
                <li>6 x 7 minute speeches + 2 x 4 minute reply speeches</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-red-400">Preparation Time:</h3>
              <ul className="list-disc list-inside ml-4 text-gray-200 leading-relaxed">
                <li>25 + 5 minute preparation time</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Common Elements / Features */}
          <section className="md:col-span-3 pt-4 border-t border-gray-700 mt-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-400 font-sans">
              Common Elements & Strategic Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* POIs */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Points of Information (POIs):</h3>
                <ul className="list-disc list-inside ml-4 text-gray-200 leading-relaxed">
                  <li>Questions that the opposite bench can ask speakers during their speech.</li>
                  <li>Maximum time per POI: 15 seconds.</li>
                  <li>
                    <span className="font-bold">Protected Time:</span> Cannot ask POIs during the first and last minute of a 7-minute speech (i.e., POIs can be asked between 1 minute and 6 minutes).
                  </li>
                  <li>Strategic tool used by opening half teams to engage with closing half teams.</li>
                  <li>POIs are a feature of Asian Parliamentary Debating too.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Vetoes (for motions/topics):</h3>
                <ul className="list-disc list-inside ml-4 text-gray-200 leading-relaxed">
                  <li>Each round has 3 topics.</li>
                  <li>Teams rank motions based on strategic preferences.</li>
                  <li>Least preference = veto (i.e., motion will not be debated).</li>
                  <li><span className="font-bold">Scenarios:</span></li>
                  <ul className="list-disc list-inside ml-8 mt-1">
                    <li><span className="font-semibold">Both teams veto different motions:</span> Motion #1 ❌, Motion #2 ✅, Motion #3 ❌ (Motion #2 is debated)</li>
                    <li><span className="font-semibold">Both teams veto the same motion:</span> Motion #1 ❌❌, Motion #2, Motion #3
                      <ul className="list-disc list-inside ml-8 mt-1">
                        <li>If both teams have the same first preference, that motion is debated.</li>
                        <li>Else, coin toss to choose between #2 and #3.</li>
                      </ul>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </section>

        </main>

      </div>
    </div>
}
export default UniversityDebate;