import Link from "next/link";
import { StatsCalculator } from "@/components/StatsCalculator";

export default function Page() {
  return (
    <main>
      <div className="page">
        <header className="hero">
          <h1>Statistiques de 4e : moyenne, médiane, étendue</h1>
          <p>
            Révise toutes les notions importantes pour ton évaluation. Tu vas
            découvrir les définitions, voir des exemples expliqués et
            t&apos;entraîner avec une calculatrice interactive.
          </p>
        </header>

        <div className="sections-grid">
          <section className="card">
            <h2>1. Les notions à connaître</h2>
            <ul>
              <li>
                <strong>Moyenne</strong> : c&apos;est la valeur qui représente
                l&apos;ensemble des données. On additionne tout, puis on divise
                par le nombre de valeurs.
              </li>
              <li>
                <strong>Médiane</strong> : elle coupe la série en deux parties
                de même taille. La moitié des valeurs est en dessous, l&apos;autre
                moitié est au-dessus.
              </li>
              <li>
                <strong>Étendue</strong> : elle mesure la dispersion. Elle
                correspond à la différence entre la plus grande valeur et la plus
                petite.
              </li>
            </ul>
          </section>

          <section className="card">
            <h2>2. Méthode pas à pas</h2>
            <ul>
              <li>
                <strong>Avant tout :</strong> trie les valeurs dans l&apos;ordre
                croissant. C&apos;est indispensable pour la médiane et pratique
                pour vérifier la cohérence.
              </li>
              <li>
                <strong>Pour la moyenne :</strong> calcule la somme, puis divise
                par le nombre de valeurs. Par exemple, pour 6, 8, 10, 11 la somme
                est 35 et il y a 4 valeurs donc la moyenne vaut 8,75.
              </li>
              <li>
                <strong>Pour la médiane :</strong> si le nombre de valeurs est
                impair, prends celle du milieu. S&apos;il est pair, fais la
                moyenne des deux valeurs centrales.
              </li>
              <li>
                <strong>Pour l&apos;étendue :</strong> soustrais la plus petite
                valeur à la plus grande. C&apos;est un calcul très rapide à la fin
                de l&apos;exercice.
              </li>
            </ul>
          </section>

          <StatsCalculator />

          <section className="card">
            <h2>3. Exercices guidés</h2>
            <p>
              Essaie de résoudre ces questions sans aide, puis vérifie tes
              réponses avec la calculatrice.
            </p>
            <table className="practice-table">
              <thead>
                <tr>
                  <th>Série</th>
                  <th>Questions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7, 11, 9, 8, 15</td>
                  <td>
                    Calcule la moyenne, la médiane et l&apos;étendue. Vérifie
                    ensuite si tes résultats sont cohérents avec les valeurs
                    d&apos;origine.
                  </td>
                </tr>
                <tr>
                  <td>12, 12, 13, 9, 14, 16, 11, 18</td>
                  <td>
                    Range la série. Quelle est la médiane ? Quelle est
                    l&apos;étendue ? Est-ce que la moyenne est proche de la
                    médiane ?
                  </td>
                </tr>
                <tr>
                  <td>5 élèves : 10/20, 12/20, 14/20, 9/20, 15/20</td>
                  <td>
                    Imagine que ce sont des notes. Que raconte chaque indicateur
                    sur le niveau de la classe ? Pourquoi l&apos;étendue est-elle
                    utile ici ?
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="callout">
              <strong>Astuce :</strong> sur ton contrôle, montre chaque étape de
              calcul. Ton professeur pourra suivre ton raisonnement et te donner
              des points même si le résultat final est faux.
            </div>
          </section>

          <section className="card tips">
            <h2>4. Astuces pour réussir</h2>
            <p>
              ✔️ Vérifie toujours que tu as bien utilisé toutes les valeurs dans
              la somme pour la moyenne.
            </p>
            <p>
              ✔️ Pour la médiane avec un nombre pair de valeurs, souligne les deux
              valeurs centrales pour ne pas te tromper.
            </p>
            <p>
              ✔️ L&apos;étendue te montre si les données sont regroupées ou très
              dispersées. Compare-la avec la moyenne pour interpréter la série.
            </p>
            <p>
              ✔️ En cas de doute, jette un œil à la{" "}
              <Link href="https://fr.wikipedia.org/wiki/Moyenne_arithm%C3%A9tique">
                page de révision sur Wikipédia
              </Link>{" "}
              pour revoir les définitions générales.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
