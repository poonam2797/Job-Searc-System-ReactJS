import React, { Component } from 'react';

class AppliedJobs extends Component {

  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div>
        <h2 className="text-center"> Applied Jobs</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <th>Job Id</th>
              <th>JobSeeker Id</th>
              <th>Action</th>
            </thead>

            <tbody>
              {
                this.state.appliedjobs.map(
                  job => 
                  <tr key = {job.id}>
                    <td>{job.job_id}</td>
                    <td>{job.jobseeker_id}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AppliedJobs;
