package com.example.demo.Agent;

import com.example.demo.Client.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/agent")
public class Agentcontroller {
    private final Agentservivce agentservice;

    @Autowired
    public Agentcontroller(Agentservivce agentservice) {
        this.agentservice = agentservice;
    }

    @GetMapping
    public List<Agent> getAgent() {
        return agentservice.Getagent();
    }

    @PostMapping
    public Void registernewagent(@RequestBody Agent agent) {
        agentservice.addnewagent(agent);
        return null;
    }

    @DeleteMapping(path = "{agentId}")
    public void deleteStudent(@PathVariable("agentId") int agentId) {
        agentservice.deleteagent(agentId);
    }

    @PutMapping(path = "{agentid}")
        public void updateclient ( @PathVariable("agentid") int agentid,
        @RequestParam(required = false) String nom,
        @RequestParam(required = false) String email){
            agentservice.updateagent(agentid, nom, email);
        }
}

