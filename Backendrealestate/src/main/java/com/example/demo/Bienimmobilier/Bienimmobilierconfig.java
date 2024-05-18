package com.example.demo.Bienimmobilier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;


public class Bienimmobilierconfig {

    @Bean
    CommandLineRunner commandLineRunner9(BienimmobilierRepository repository) {
        return args -> {
            Bienimmobilier bien1 = new Bienimmobilier(
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
            repository.saveAll(
                    List.of(bien1, bien2)
            );


        };
    }
}
