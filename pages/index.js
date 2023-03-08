import { useState } from 'react'
import { connect } from "react-redux"
import { findGit } from "../redux/actions/repoManage/index"
import styles from '../styles/Home.module.css'

function Home(props) {
  const { name, findGit, repoList } = props
  const [newName, setName] = useState("yudihrdna17")

  return (
    <div className={styles.container}>
      <p>Enter a Name {name}:</p>
      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setName(e.target.value)}>

        </input>
        <button onClick={() => findGit(newName)}>
          Submit
        </button>


    <div>
      {
        repoList.map((repo, id) => (
          <p key={id}>
            {
              repo.name
            }
          </p>
        ))
      }
    </div>

    </div>
  )
}

const mapStateToProps = state => {
 return { name: state.git.name, repoList: state.git.repoList }
}

const mapDispatchToProps = {
  findGit
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)