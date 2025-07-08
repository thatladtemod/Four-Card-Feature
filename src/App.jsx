import Header from "./Header"
import Card from "./Card"
import calculatorIcon from "./assets/icon-calculator.svg"
import karmaIcon from "./assets/icon-karma.svg"
import surpervisorIcon from "./assets/icon-supervisor.svg"
import teamBuilderIcon from "./assets/icon-team-builder.svg"

export default function App() {

  return (
    <>
      <Header />
      <main className="main-container">
        <Card
          heading="Superior"
          description="Monitors activity to indentify project roadblocks"
          src= {surpervisorIcon}
          alt= "the supervisor icon"
        />
        <Card
          heading="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          src= {teamBuilderIcon}
          alt= "the team builder icon"
        />
        <Card
          heading="Karma"
          description="Regularly evaluate our talents to ensure quality"
          src= {karmaIcon}
          alt= "the karma icon"
        />
        <Card
          heading="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          src= {calculatorIcon}
          alt= "the calculator icon"
        />
      </main>
    </>
  )
}