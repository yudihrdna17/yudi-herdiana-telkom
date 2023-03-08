import { useState } from 'react'
import { connect } from "react-redux"
import { findGit } from "../redux/actions/repoManage/index"

function Home(props) {
  const { name, findGit, repoList } = props
  const [newName, setName] = useState("yudihrdna17")

  const data = repoList.length > 0 ? repoList.map((item, id) => ({
    key: id,
    name: item.name,
    updated: item.updated_at,
    url: item.html_url
  })): [];

  function openInNewTab(url) {
    const repoPage = data[url];
    window.open(repoPage.url, '_blank').focus();
  }

  return (
    <div className="items-center">
      <div className="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
        <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-xl font-bold text-gray-900">{name.toUpperCase()} Repository Lists</p>
                <p className="text-sm mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">Show Repository by Git Username</p>
              </div>
              <div className="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
              
              <div className="mb-4 flex items-center">
                <input type="text" className="w-full rounded-lg border border-gray-400 p-2" placeholder="Search username" onChange={(e) => setName(e.target.value)}/>
                <button className="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600" onClick={() => findGit(newName)}>Search</button>
              </div>
              </div>
            </div>
              {
                data.map((repo, id) => (
                  <div key={id} className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                    <div className="pt--10 pr-0 pb-10 pl-0">
                      <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                          <div className="flex items-center flex-1 min-w-0">
                            <div className="mt-0 mr-0 mb-0 ml-0 flex-1 min-w-0">
                              <p className="text-lg font-bold text-gray-800 truncate">{repo.name}</p>
                              <p className="text-gray-600 text-md">Last update {repo.updated}</p>
                            </div>
                          </div>
                          <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                            <button className="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-small text-gray-100 transition-all
                                duration-200 hover:bg-gray-700 rounded-lg" onClick={()=> openInNewTab(id)}>Visit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
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