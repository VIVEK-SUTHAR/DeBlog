import ProfileBar from "../components/ProfileBar"
const BlogPage = () => {
    return (

        <div className="bg-[#ffffff] w-screen flex-1 overflow-y-scroll Scroll px-10">
            <ProfileBar/>
            <div className="mt-8">
                <h2 className="text-6xl font-bold">Marcus Aurelius on Socrates</h2>
                <h3 className="text-4xl mt-8 font-semibold text-[#757575]">What the Stoic Emperor Learned from the Athenian Philosopher</h3>
                <img src="https://miro.medium.com/max/1050/1*bcnuz2Lvk5pb51SWGE6BjA.png" className="mt-12 w-screen" alt="body-img" />
                <div className="mt-8 text-xl">
                    <p>175 AD, probably for the first time in his life, in his mid-fifties, the Roman emperor Marcus Aurelius, set foot in Athens. It was in fact a pilgrimage for him. During of the “War of Many Nations” he’d been fighting along the Danube frontier, he had taken a sacred oath that he would travel to Athens, if victorious, and be initiated into the Eleusinian mysteries. Although these rites ended with initiation at the Temple of Demeter in nearby Eleusis, they began in the centre of Athens, outside the Stoa Poikile, or painted porch, the ancient home of Stoic philosophy. <br />
                        As Marcus stood upon the Stoa Poikile, he would have gazed across the Agora where Socrates once discussed philosophy, and where he was later put on trial, imprisoned, and executed. Beyond the Agora, Marcus would have seen the Temple of Athena known as the Parthenon. At that time a colossal statue of the goddess of wisdom looked down on Athens, from atop the Acropolis. Most of the drama of Socrates’ life had unfolded within the bounds of the Agora, under the gaze of Athena. <br />
                        It must have been a humbling experience for Marcus to know that he was walking in Socrates’ footsteps. According to the Historia Augusta, the emperor had “ever on his lips” the saying attributed to Socrates in Plato’s Republic that “those states prospered where the philosophers were kings or the kings philosophers.” <br />
                        The Stoic school appears to have been viewed, at least by some, as a Socratic sect. <br />
                        Socrates and the Stoics
                        Socrates was, in a sense, the godfather of Stoicism. The Stoic school appears to have been viewed, at least by some, as a Socratic sect. We’re told that its founder, Zeno of Citium, received a pronouncement from the god Apollo, via his priestess at Delphi, instructing him to “take on the colour of dead men”. He was awakened to the meaning of this cryptic statement when he stumbled across the second book of Xenophon’s Memorabilia Socratis, which contains a famous speech by Socrates, an exhortation to the life of virtue and philosophy. Henceforth, the Stoics appear to have viewed Socrates as their supreme role model. Centuries later, for instance, we find the great Stoic teacher, Epictetus, repeatedly telling his young students to emulate Socrates, and ask themselves what Socrates would have done in various situations. <br />
                        Marcus narrowly missed the opportunity to meet Epictetus in person but he probably knew men who had attended his lectures. For example, Marcus’ favourite Stoic mentor, Junius Rusticus, gifted him a copy of the Discourses of Epictetus, from his own private library — possibly meaning that Marcus read the words of Epictetus before they were known to the public. Marcus quotes Epictetus, throughout the Meditations, more often than he does any other thinker, and it seems clear that he saw himself as a follower of Epictetus’ branch of Stoicism. <br />
                        There were reputedly eight volumes of the Discourses originally, only half of which survive today. Marcus quotes from the Discourses known to us but he also quotes other sayings of Epictetus, suggesting that he had may have read the missing Discourses. It may even be that some of the passages in the Meditations that we attribute to Marcus are actually quotes or paraphrases from these lost volumes of Epictetus’ teachings. <br />
                    </p>
                </div>
            </div>
        </div>
    )
}
export default BlogPage