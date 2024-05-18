package com.example.demo.Agent;

import com.example.demo.Client.Client;
import com.example.demo.Transaction.Transaction;
import com.example.demo.Transaction.Transactiontype;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class Agentservivce {
    private final Agentrepository agentrepository;

    @Autowired
    public Agentservivce(Agentrepository agentrepository) {
        this.agentrepository = agentrepository;
    }

    public List<Agent> Getagent() {
        return agentrepository.findAll();
    }

    public void addnewagent(Agent agent) {
        Optional<Agent> agentbyemail =
                agentrepository.findagentbyemail(agent.getEmail());
        if (agentbyemail.isPresent()) {
            throw new IllegalStateException("client already exists or email used before");

        }
        agentrepository.save(agent);
    }

    public void deleteagent(int agentId) {
        boolean exists = agentrepository.existsById(agentId);
        if (!exists) {
            throw new IllegalStateException("agent does not exist");
        }
        agentrepository.deleteById(agentId);
    }
    public void updateagent(int agentid, String nom, String email) {
        Agent agent = agentrepository.findById(agentid).orElseThrow(() -> new IllegalStateException("agent not found") );
        if (!Objects.equals(agent.getEmail(), email) && email != null) {
            agent.setEmail(email);
        }
        if (!Objects.equals(agent.getNom(), nom) && nom != null) {
            agent.setNom(nom);
        }
    }
}
