<div className="mt-14 flex flex-col">
                <div>
                    <h1 className="font-bold">DEV TRIVIA</h1>
                    <p>
                        Test your coding knowledge and compete with fellow developers in our weekly live trivia game! Every Wednesday at 12pm ET, join us
                        for 10 rounds of brain-teasing questions covering everything from programming languages to compuiter science fundamentals.
                        Climb the leaderboard, learn something new, and have fun with the dev community!
                    </p>
                </div>

                <div className="w-fit my-3 flex flex-col gap-1 justify-center">
                    <h1 className="font-bold">--- Next game starts in ---</h1>
                    <div className="outline-2 py-2 mt-2 gap-1 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-3xl">{timeLeft.days}</p>
                            <p className="text-[11px]">DAYS</p>
                        </div>

                        <p className="mb-3">:</p>
                        
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-3xl">{timeLeft.hours}</p>
                            <p className="text-[11px]">HOURS</p>
                        </div>

                        <p className="mb-3">:</p>

                        <div className="flex flex-col items-center justify-center">
                            <p className="text-3xl">{timeLeft.minutes}</p>
                            <p className="text-[11px]">MINUTES</p>
                        </div>

                        <p className="mb-3">:</p>

                        <div className="flex flex-col items-center justify-center">
                            <p className="text-3xl">{timeLeft.seconds}</p>
                            <p className="text-[11px]">SECONDS</p>
                        </div>
                    </div>
                </div>

                <div className="my-3 flex flex-col gap-1 justify-center">
                    <h1 className="font-bold">--- How It Works ---</h1>
                    <p>
                        Dev Trivia is a weekly, live trivia game. All players will be asked the same question at the same time and given 10 seconds to answer
                        it. Every correct answer scores points based on how much time is left in the round - the quicker you answer (correctly), the more
                        points you get. Climb the leaderboard, compete with fellow developers, and have a good time doing it!
                    </p>
                </div>
            </div>