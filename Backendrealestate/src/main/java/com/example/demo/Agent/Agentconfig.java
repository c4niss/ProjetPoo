package com.example.demo.Agent;

import com.example.demo.Bienimmobilier.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class Agentconfig {
    @Bean
    CommandLineRunner commandLineRunner(Agentrepository agentRepository, BienimmobilierRepository bienimmobilierRepository) {
        return args -> {
            Bienimmobilier bien1 = new Bienimmobilier(
                    20000,
                    2000000000.00,
                    "tipaza",
                    "achour",
                    "mauvaise",
                    Bienetat.LOUE,
                    Bienimmobiliertype.APPARTEMENT,
                    Bientypechambre.F4,
                    1
            );
            Bienimmobilier bien3 = new Bienimmobilier(
                    20000,
                    2000000000.00,
                    "alger",
                    "draria",
                    "belle vue",
                    Bienetat.DISPONIBLE,
                    Bienimmobiliertype.VILLA,
                    Bientypechambre.F5,
                    2

            );
            Bienimmobilier bien2 = new Bienimmobilier(
                    20000,
                    2000000000.00,
                    "tipaza",
                    "achour",
                    "mauvaise",
                    Bienetat.LOUE,
                    Bienimmobiliertype.APPARTEMENT,
                    Bientypechambre.F4,
                    1

            );
            bienimmobilierRepository.saveAll(List.of(bien1,bien2,bien3));


            Agent agent1 = new Agent(
                    "anis mohamed",
                    "123 Main Street, Anytown, CA 12345",
                    "john.doe@example.com",
                    bien1
            );
            Agent agent2 = new Agent(
                    "mokhtari yasser",
                    "456 Elm Street, Anytown, CA 12345",
                    "jane.smith@example.com",
                    bien2
            );
            Agent agent3 = new Agent(
                    "bouzouade rayan",
                    "789 Oak Lane, Anytown, CA 12345",
                    "peter.jones@example.com",
                    bien1
            );
            Agent agent4 = new Agent(
                    "raiah anes merouane",
                    "1011 Maple Drive, Anytown, CA 12345",
                    "mary.brown@example.com",
                    bien1
            );
            Agent agent5 = new Agent(
                    "doumi youcef",
                    "1213 Pine Avenue, Anytown, CA 12345",
                    "david.williams@example.com",
                    bien1
            );


            agentRepository.saveAll(List.of(agent1,agent2,agent3,agent4,agent5));
        };
    }
}
