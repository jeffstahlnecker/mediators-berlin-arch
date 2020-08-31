import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Row from "../components/Row";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Row
        setPadding="0 0 0 5vw"
        heading="Was ist Mediation?"
        description={[
          "Die Mediation ist eine Methode zur Vermittlung in Konfliktfällen, die der gemeinsamen und konstruktiven Lösungsfindung dient. Sie ist ein vertrauliches und strukturiertes Verfahren, in dem die beteiligten Parteien (Mediant*innen) freiwillig, eigenverantwortlich und wertschätzend eine einvernehmliche Beilegung ihres Konflikts anstreben.",
          "Der*die Mediator*in unterstützt die Mediant*innen hierbei und leitet die Gespräche als ergebnisoffenen Prozess. Er*sIe stellt einen sicheren und schützenden Rahmen her, in dem die Mediant*innen sich offen, ehrlich und kooperativ begegnen können. Der*die Mediator*in ist allparteilich, steht also auf der Seite aller Beteiligten. Er*sie unterstützt die Mediant*innen bei der Erarbeitung von Lösungsoptionen und Vereinbarungen, so dass für alle Parteien eine win-win Situation entstehen kann.",
          "Was ist die Mediation nicht?",
          "Eine Mediation umfasst weder psychologische, therapeutische noch juristische Beratung, noch stellt sie ein Coaching dar.",
        ]}
      />
      <Row
        setOrder="6"
        setPadding="0 5vw 0 0"
        setAlign="right"
        setJustify="flex-end"
        heading="Welche Vorteile kann mir eine Mediation bringen?"
        description={[
          "Konflikte gehören zum Alltag und werden oft als belastend wahrgenommen. Eine konstruktive Konfliktlösung kann alle Beteiligten weiterbringen und ein harmonisches, oder zumindest friedvolles, Miteinander ermöglichen.",
          "Wenn Sie Ihren aktuellen Konflikt als Möglichkeit zu persönlichem Wachstum und positiver Veränderung betrachten möchten, ist eine Mediation vermutlich der richtige Weg für Sie. Wenn Sie das Gespräch mit Ihrem Gegenüber wieder in Gang bringen und/oder einen tragfähigen Konsens finden möchten, stehen Ihnen die Mediator*innen in unserem Netzwerk professionell zur Seite.",
        ]}
      />
    </Layout>
  );
}
