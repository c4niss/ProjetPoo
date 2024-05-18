package com.example.demo.Agent;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Agentrepository extends JpaRepository<Agent, Integer> {
    @Query("SELECT a FROM Agent a WHERE a.email = ?1 ")
    Optional<Agent> findagentbyemail(String email);

}
